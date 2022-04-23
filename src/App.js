import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <>
        Hello World        
      </>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={ContactMe} />
          <Route exact path='/resume' component={Resume} />
          <Route component={NoMatch} />
        </Switch>
    </Router>
  );
}

export default App;
