import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import React from 'react';
import Controls from '../containers/controls';
import Counter from '../containers/counter';
import CreateButton from './create';
import '../style.scss';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const About = (props) => {
  return (
    <div>
      <p>Click the button below to generate a checkup</p>
      <CreateButton />
    </div>
  );
};

const Welcome = (props) => {
  return (
    <div>Welcome <Counter /><Controls /></div>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
