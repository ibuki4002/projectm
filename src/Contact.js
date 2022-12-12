import logo from './logo.svg';
import './App.css';
import React from 'react';




class Contact extends React.Component {
  
   
    
    render() {
      const name = this.state.name;
  
      return (
          <div className="skill h-96"> 
            <div className="wrapper max-w-7xl m-auto px-4">
              <div className="text-center my-auto">Contact</div>
            </div>
          </div>
      );

    }
  
 
}


export default Contact;