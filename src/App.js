
import './App.css';
import React from 'react';
import Header from './Header.js';
import Skill from './Skill.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import Home from './Home.js';
import Introduce from './Introduce.js';
import { BrowserRouter, Route,Routes } from 'react-router-dom';


class App extends React.Component {
  
    render() {
      
      return (
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="*" element={<div><Home /><Skill /><Introduce /></div>}>
              </Route>
              <Route path="/contact" element={<Contact />}>
              </Route>
            </Routes>
            <Footer />
          </div>
        </BrowserRouter> 
      );

    }
  
 
}


export default App;
