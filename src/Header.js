
import './App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



class Header extends React.Component {
  
  
    render() {
      
  
      return (
        
          <div className="header fixed bg-white w-full">
            <div className="wrapper max-w-7xl m-auto px-4">
              <div className="w-full flex justify-between">
                <div className="text-xl">IBUKI TANAKA</div>
                <nav className="text-xl w-72">
                  <ul className="flex justify-between w-full list-none">
                    <li>
                     <HashLink smooth to="/home#home">HOME</HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/skill#skill">SKILL</HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/work#work">WORK</HashLink>
                    </li>
                    <li>
                       <NavLink  to="/contact" className="active:text-rose-600">
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
