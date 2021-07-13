import {
  Button,
  Container,
  Col,
  Row,
  ProgressBar,
  Modal,
} from "react-bootstrap";
import react from "react";

const toStringWithSign = (x: number) => {
  if (x > 0) {
    return "+" + x.toString();
  } else {
    return x.toString();
  }
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
const initPlayers = () => {
  const turns = Math.random() > 0.5 ? ["先攻", "後攻"] : ["後攻", "先攻"];
  return turns.map((turn) => {
    return {
      lp: 8000,
      turn: turn,
    } as Player;
  });
};

const LifePoint = (props: { lp: number }) => {
  const { lp } = props;
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
      <div className="lp-header">LP</div>
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

const LP = () => {
  const [showModal, setShowModal] = react.useState(false);
  const players = initPlayers();
  const [playerA, setPlayerA] = react.useState(players[0]);
  const [playerB, setPlayerB] = react.useState(players[1]);

  const newGame = () => {
    const newPlayers = initPlayers();
    setPlayerA(newPlayers[0]);
    setPlayerB(newPlayers[1]);
    setShowModal(false);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="player">
              <LifePoint lp={playerA.lp}></LifePoint>
              <div>{playerA.turn}</div>
            </div>
          </Col>
          <Col>
            <Button onClick={() => setShowModal(true)}>New</Button>
          </Col>
          <Col>[←] [→] [履歴]</Col>
          <Col>
            <div className="player">
              <div>{playerB.turn}</div>
              <LifePoint lp={playerB.lp}></LifePoint>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <ControlPanel
              addLP={(lp: number) =>
                setPlayerA({ ...playerA, lp: Math.max(0, playerA.lp + lp) })
              }
            ></ControlPanel>
          </Col>
          <Col>
            <ControlPanel
              addLP={(lp: number) =>
                setPlayerB({ ...playerB, lp: Math.max(0, playerB.lp + lp) })
              }
            ></ControlPanel>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal}>
        <Modal.Header>New Game?</Modal.Header>
        <Modal.Body>
          新しいゲームを開始してよろしいですか？
          <br />
          現在のゲームは終了されます。
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => newGame()}>はい</Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            いいえ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LP;
