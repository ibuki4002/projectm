import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Skill from './Skill';
import Contact from './Contact';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

class App extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        name: 'James'
      }
    }
    
    render() {
      const name = this.state.name;
  
      return (
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route exact path="/">
                Home
              </Route>
              <Route path="/skill">
                <Skill />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Routes>
          </div>
        </BrowserRouter> 
      );

    }
  
 
}


export default App;
