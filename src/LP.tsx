import {
  Badge,
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
  [-600, -800, -900],
  [-1000, -2000, -3000],
  [1000],
];
const playerName = ["光", "闇"];
type Turn = "先攻" | "後攻";
interface Player {
  lp: number;
  turn: Turn;
}
interface LPLog {
  time: number;
  playerID: number;
  from: number;
  to: number;
}

interface History {
  logs: LPLog[];
  head: number;
}

type Result = "Win" | "Lose" | "Draw";

const initPlayers = () => {
  const turns = Math.random() > 0.5 ? ["先攻", "後攻"] : ["後攻", "先攻"];
  return turns.map((turn) => {
    return {
      lp: 8000,
      turn: turn,
    } as Player;
  });
};

const LifePoint = (props: {
  name: string;
  turn: string;
  result: Result | null;
  lp: number;
}) => {
  const { name, turn, result, lp } = props;
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
  const badge = (() => {
    if (result === "Win") {
      return (
        <Badge pill variant="info">
          W
        </Badge>
      );
    } else if (result === "Lose") {
      return (
        <Badge pill variant="dark">
          L
        </Badge>
      );
    } else if (result === "Draw") {
      return (
        <Badge pill variant="warning">
          D
        </Badge>
      );
    } else {
      return null;
    }
  })();
  return (
    <div className="lp-parent bg-light text-black">
      <div className="lp-header">
        {name}（{turn}）{badge}
      </div>
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
          <Row style={{ padding: 15 }}>
            {row.map((val) => {
              return (
                <Col>
                  <Button
                    variant="outline-secondary"
                    style={{
                      width: "100px",
                      height: "60px",
                    }}
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
  players: players,
  history: {
    logs: [],
    head: -1,
  } as History,
  // 引き分けの場合は-1, 初戦が終了していない場合はnull
  firstDuelWinnerID: null as number | null,
});

const useNewGameModal = (
  newGame: () => void
): [() => JSX.Element, () => void] => {
  const [showModal, setShowModal] = react.useState(false);
  const close = () => setShowModal(false);
  const NewGameModal = () => (
    <Modal show={showModal} onHide={close}>
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
        <Button variant="secondary" onClick={close}>
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
  const close = () => setShowModal(false);
  const HistoryModal = (props: { history: History }) => {
    const { history } = props;
    const head = history.head;
    const now = Date.now();
    const logs = history.logs.map(({ time, playerID, from, to }, i) => {
      return (
        <ListGroup.Item variant={i === head ? "dark" : ""}>
          {formatTime(now - time)}前: {playerName[playerID]} {from} → {to} (
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
      <Modal show={showModal} onHide={close}>
        <Modal.Header closeButton>ライフポイント変動ログ</Modal.Header>
        <Modal.Body>
          <ListGroup>{visibleLogs}</ListGroup>
        </Modal.Body>
      </Modal>
    );
  };
  const showHistoryModal = () => setShowModal(true);
  return [HistoryModal, showHistoryModal];
};

const LP = () => {
  const [players, setPlayers] = useGlobalState("players");
  const [history, setHistory] = useGlobalState("history");
  const [firstDuelWinnerID, setFirstDuelWinnerID] =
    useGlobalState("firstDuelWinnerID");
  const newGame = () => {
    const newPlayers = initPlayers();
    setPlayers(newPlayers);
    setHistory({ logs: [], head: -1 });
    setFirstDuelWinnerID(null);
  };
  const undo = () => {
    if (history.head < 0) {
      return;
    }
    const log = history.logs[history.head];
    setPlayers(
      players.map((player, i) => {
        if (i === log.playerID) {
          return { ...player, lp: log.from };
        }
        return player;
      })
    );
    setHistory({ ...history, head: history.head - 1 });
  };
  const redo = () => {
    if (history.head >= history.logs.length - 1) {
      return;
    }
    const log = history.logs[history.head + 1];
    setPlayers(
      players.map((player, i) => {
        if (i === log.playerID) {
          return { ...player, lp: log.to };
        }
        return player;
      })
    );
    setHistory({ ...history, head: history.head + 1 });
  };
  const [NewGameModal, showNewGameModal] = useNewGameModal(newGame);
  const [HistoryModal, showHistoryModal] = useHistoryModal();
  const addLP = (i: number) => (lp: number) => {
    const player = players[i];
    const to = Math.max(0, player.lp + lp);
    setHistory({
      logs: [
        ...history.logs.slice(0, history.head + 1),
        {
          time: Date.now(),
          playerID: i,
          from: player.lp,
          to,
        },
      ],
      head: history.head + 1,
    });
    setPlayers(
      players.map((player, j) => {
        if (j === i) {
          return { ...player, lp: to };
        }
        return player;
      })
    );
  };
  const nextDuel = () => {
    setFirstDuelWinnerID(() => {
      if (players[0].lp === 0 && players[1].lp === 0) {
        return -1;
      } else if (players[0].lp === 0) {
        return 1;
      } else {
        return 0;
      }
    });
    setHistory({ logs: [], head: -1 });
    setPlayers([
      {
        lp: 8000,
        turn: players[1].turn,
      },
      {
        lp: 8000,
        turn: players[0].turn,
      },
    ]);
  };
  const results = players.map((_, i): Result | null => {
    if (firstDuelWinnerID === null) {
      return null;
    } else if (i === firstDuelWinnerID) {
      return "Win";
    } else if (firstDuelWinnerID === -1) {
      return "Draw";
    } else {
      return "Lose";
    }
  });

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button onClick={showNewGameModal}>New</Button>{" "}
            <Button
              onClick={nextDuel}
              disabled={
                firstDuelWinnerID !== null ||
                players.every((player) => player.lp > 0)
              }
            >
              Next Duel
            </Button>{" "}
            <Button onClick={undo} disabled={history.head < 0}>
              Undo
            </Button>{" "}
            <Button
              onClick={redo}
              disabled={history.head >= history.logs.length - 1}
            >
              Redo
            </Button>{" "}
            <Button onClick={showHistoryModal}>ログ</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="player">
              <LifePoint
                name={playerName[0]}
                turn={players[0].turn}
                result={results[0]}
                lp={players[0].lp}
              ></LifePoint>
            </div>
          </Col>
          <Col md={{ offset: 6 }}>
            <div className="player">
              <LifePoint
                name={playerName[1]}
                turn={players[1].turn}
                result={results[1]}
                lp={players[1].lp}
              ></LifePoint>
            </div>
          </Col>
        </Row>
        <Row>
          {players.map((_, i) => {
            return (
              <Col>
                <ControlPanel addLP={addLP(i)}></ControlPanel>
              </Col>
            );
          })}
        </Row>
      </Container>
      <NewGameModal />
      <HistoryModal history={history} />
    </>
  );
};

export default LP;
