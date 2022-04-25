import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <>
        <Header />
      </>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={ContactMe} />
          <Route exact path='/resume' component={Resume} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
