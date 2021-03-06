import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import React from 'react';
import Home from './/components/pages/Home';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Services from './components/pages/Services';


function App() {
  return (
  <>
  <Router>
  <Navbar/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/services"  component={Services} />
      <Route path="/products"  component={Products} />
      <Route path="/sign-up"  component={SignUp} />
    </Switch>
  </Router>
  </>
  );
}

export default App;
