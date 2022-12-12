import logo from './logo.svg';
import './App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';




class Header extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        name: 'James'
      }
    }
  
    render() {
      const name = this.state.name;
  
      return (
        
          <div className="header">
            <div className="wrapper max-w-7xl m-auto px-4">
              <div className="w-full flex justify-between">
                <div className="text-xl">IBUKI TANAKA</div>
                <nav className="text-xl ">
                  <ul class="flex justify-between w-full list-none">
                    <li>
                      <NavLink activeClassName="active" to="/" className="active:text-rose-600">
                        HOME
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/skill" className="active:text-rose-600">
                        SKILL
                      </NavLink>
                    </li>
                    <li>
                       <NavLink activeClassName="active" to="/contact" className="active:text-rose-600">
                        CONTACT
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
         
        
      );

    }
  
 
}

export default Header;
