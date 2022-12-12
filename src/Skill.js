import logo from './logo.svg';
import './App.css';
import React from 'react';




class Skill extends React.Component {
  
   
    
    render() {
      const name = this.state.name;
  
      return (
          <div className="skill h-96"> 
            <div className="wrapper max-w-7xl m-auto px-4">
              <div className="text-center my-auto">Skill</div>
            </div>
          </div>
      );

    }
  
 
}


export default Skill;