import { Button, Container, Col, Row, ProgressBar } from "react-bootstrap";

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

const ControlPanel = () => {
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
  return (
    <Container>
      <Row>
        <Col>
          <div className="player">
            <LifePoint lp={8000}></LifePoint>
            <div>先攻</div>
          </div>
        </Col>
        <Col>[New] [←] [→] [履歴]</Col>
        <Col>
          <div className="player">
            <div>後攻</div>
            <LifePoint lp={3000}></LifePoint>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <ControlPanel></ControlPanel>
        </Col>
        <Col>
          <ControlPanel></ControlPanel>
        </Col>
      </Row>
    </Container>
  );
};

export default LP;
