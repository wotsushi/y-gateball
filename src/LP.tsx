import { Button, Container, Col, Row, ProgressBar } from "react-bootstrap";
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
interface Player {
  lp: number;
}

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
  const [playerA, setPlayerA] = react.useState({ lp: 8000 } as Player);
  const [playerB, setPlayerB] = react.useState({ lp: 8000 } as Player);
  return (
    <Container>
      <Row>
        <Col>
          <div className="player">
            <LifePoint lp={playerA.lp}></LifePoint>
            <div>先攻</div>
          </div>
        </Col>
        <Col>[New] [←] [→] [履歴]</Col>
        <Col>
          <div className="player">
            <div>後攻</div>
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
  );
};

export default LP;
