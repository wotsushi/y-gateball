import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import LP from "./LP";
import MonsterTable from "./Monster";
import SpellTable from "./Spell";
import TrapTable from "./Trap";
import Rule from "./Rule";
import FAQList from "./FAQ";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const base = process.env.PUBLIC_URL;
  return (
    <Router basename={base}>
      <div className="App">
        <Navbar bg="light" expand sticky="top">
          <Navbar.Brand as={Link} to="/">
            04環境
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/monster">
                モンスター
              </Nav.Link>
              <Nav.Link as={Link} to="/spell">
                魔法
              </Nav.Link>
              <Nav.Link as={Link} to="/trap">
                罠
              </Nav.Link>
              <Nav.Link as={Link} to="/rule">
                ルール
              </Nav.Link>
              <Nav.Link as={Link} to="/faq">
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/" exact>
            <LP />
          </Route>
          <Route path="/monster">
            <MonsterTable />
          </Route>
          <Route path="/spell">
            <SpellTable />
          </Route>
          <Route path="/trap">
            <TrapTable />
          </Route>
          <Route path="/rule">
            <Rule />
          </Route>
          <Route path="/faq">
            <FAQList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
