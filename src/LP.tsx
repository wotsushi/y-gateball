import {
  Button,
  Container,
  Col,
  Row,
  ProgressBar,
  Modal,
  ListGroup,
} from "react-bootstrap";
import react from "react";
import { createGlobalState } from "react-hooks-global-state";

const toStringWithSign = (x: number) => {
  if (x > 0) {
    return "+" + x.toString();
  } else {
    return x.toString();
  }
};

const formatTime = (ms: number) => {
  const s = Math.floor(ms / 1000);
  if (s < 60) {
    return `${s}秒`;
  }
  const m = Math.floor(s / 60);
  return `${m}分`;
};

const lifeValues = [
  [-50, -100, -200],
  [-300, -400, -500],
  [-600, -800, -1000],
  [-2000, -3000, 1000],
];
type Turn = "先攻" | "後攻";
interface Player {
  lp: number;
  turn: Turn;
}
interface LPLog {
  time: number;
  name: string;
  from: number;
  to: number;
}

interface History {
  logs: LPLog[];
  head: number;
}

const initPlayers = () => {
  const turns = Math.random() > 0.5 ? ["先攻", "後攻"] : ["後攻", "先攻"];
  return turns.map((turn) => {
    return {
      lp: 8000,
      turn: turn,
    } as Player;
  });
};

const LifePoint = (props: { name: string; lp: number }) => {
  const { name, lp } = props;
  const now = Math.floor(lp / 80);
  const variant = (() => {
    if (lp > 4000) {
      return "success";
    } else if (lp > 2000) {
      return "warning";
    } else {
      return "danger";
    }
  })();
  return (
    <div className="lp-parent bg-light text-black">
      <div className="lp-header">{name}</div>
      <ProgressBar variant={variant} now={now}></ProgressBar>
      <div className="lp">{props.lp}</div>
    </div>
  );
};

const ControlPanel = (props: { addLP: (lp: number) => void }) => {
  return (
    <Container>
      {lifeValues.map((row) => {
        return (
          <Row style={{ padding: 10 }}>
            {row.map((val) => {
              return (
                <Col>
                  <Button
                    variant="outline-dark"
                    style={{ width: "100px", height: "50px" }}
                    onClick={() => props.addLP(val)}
                  >
                    {toStringWithSign(val)}
                  </Button>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
};

const players = initPlayers();
const { useGlobalState } = createGlobalState({
  playerA: players[0],
  playerB: players[1],
  history: {
    logs: [],
    head: -1,
  } as History,
});

const useNewGameModal = (
  newGame: () => void
): [() => JSX.Element, () => void] => {
  const [showModal, setShowModal] = react.useState(false);
  const NewGameModal = () => (
    <Modal show={showModal}>
      <Modal.Header>New Game?</Modal.Header>
      <Modal.Body>
        新しいゲームを開始してよろしいですか？
        <br />
        現在のゲームは終了されます。
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            newGame();
            setShowModal(false);
          }}
        >
          はい
        </Button>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          いいえ
        </Button>
      </Modal.Footer>
    </Modal>
  );
  const showNewGameModal = () => setShowModal(true);
  return [NewGameModal, showNewGameModal];
};

const useHistoryModal = (): [
  (props: { history: History }) => JSX.Element,
  () => void
] => {
  const [showModal, setShowModal] = react.useState(false);
  const HistoryModal = (props: { history: History }) => {
    const { history } = props;
    const head = history.head;
    const now = Date.now();
    const logs = history.logs.map(({ time, name, from, to }, i) => {
      return (
        <ListGroup.Item variant={i === head ? "dark" : ""}>
          {formatTime(now - time)}前: {name} {from} → {to} (
          {toStringWithSign(to - from)})
        </ListGroup.Item>
      );
    });
    const visibleLogs = (() => {
      const len = history.logs.length;
      // HEADより前のログの数
      const front = head;
      // HEADより後のログの数
      const rear = len - head - 1;

      if (front <= 5) {
        // 前が少ないので前から10個返すだけ
        return logs.slice(0, 10);
      }
      if (rear <= 4) {
        // 後ろが少ないので、後ろから10個返すだけ
        return logs.slice(Math.max(0, len - 10));
      }
      // 前も後ろも十分にログがある場合はHEADを中心に10個のログを返す
      return logs.slice(head - 5, head + 5);
    })().reverse();
    return (
      <Modal show={showModal}>
        <Modal.Header>ライフポイント変動ログ</Modal.Header>
        <Modal.Body>
          <ListGroup>{visibleLogs}</ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setShowModal(false);
            }}
          >
            閉じる
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  const showHistoryModal = () => setShowModal(true);
  return [HistoryModal, showHistoryModal];
};

const LP = () => {
  const [playerA, setPlayerA] = useGlobalState("playerA");
  const [playerB, setPlayerB] = useGlobalState("playerB");
  const [history, setHistory] = useGlobalState("history");
  const newGame = () => {
    const newPlayers = initPlayers();
    setPlayerA(newPlayers[0]);
    setPlayerB(newPlayers[1]);
    setHistory({ logs: [], head: -1 });
  };
  const undo = () => {
    if (history.head < 0) {
      return;
    }
    const log = history.logs[history.head];
    if (log.name === "西") {
      setPlayerA({ ...playerA, lp: log.from });
    } else {
      setPlayerB({ ...playerB, lp: log.from });
    }
    setHistory({ ...history, head: history.head - 1 });
  };
  const [NewGameModal, showNewGameModal] = useNewGameModal(newGame);
  const [HistoryModal, showHistoryModal] = useHistoryModal();

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="player">
              <LifePoint name="西" lp={playerA.lp}></LifePoint>
              <div>{playerA.turn}</div>
            </div>
          </Col>
          <Col>
            <Button onClick={showNewGameModal}>New</Button>{" "}
            <Button onClick={undo} disabled={history.head < 0}>
              Undo
            </Button>
            [→] <Button onClick={showHistoryModal}>ログ</Button>
          </Col>
          <Col>
            <div className="player">
              <div>{playerB.turn}</div>
              <LifePoint name="東" lp={playerB.lp}></LifePoint>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <ControlPanel
              addLP={(lp: number) => {
                const to = Math.max(0, playerA.lp + lp);
                setHistory({
                  logs: [
                    ...history.logs.slice(0, history.head + 1),
                    {
                      time: Date.now(),
                      name: "西",
                      from: playerA.lp,
                      to,
                    },
                  ],
                  head: history.head + 1,
                });
                setPlayerA({ ...playerA, lp: to });
              }}
            ></ControlPanel>
          </Col>
          <Col>
            <ControlPanel
              addLP={(lp: number) => {
                const to = Math.max(0, playerB.lp + lp);
                setHistory({
                  logs: [
                    ...history.logs.slice(0, history.head + 1),
                    { time: Date.now(), name: "東", from: playerB.lp, to },
                  ],
                  head: history.head + 1,
                });
                setPlayerB({ ...playerB, lp: to });
              }}
            ></ControlPanel>
          </Col>
        </Row>
      </Container>
      <NewGameModal />
      <HistoryModal history={history} />
    </>
  );
};

export default LP;
