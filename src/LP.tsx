import { Button, Container, Col, Row } from "react-bootstrap";

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
        <Col>LP: 8000 先攻</Col>
        <Col>[New] [←] [→] [履歴]</Col>
        <Col>LP: 4700 後攻</Col>
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
