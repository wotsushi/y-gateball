import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import MonsterTable from './Monster';
import SpellTable from './Spell';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">04環境</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/monster">モンスター</Nav.Link>
              <Nav.Link href="/spell">魔法</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/monster">
            <MonsterTable />
          </Route>
          <Route path="/spell">
            <SpellTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
