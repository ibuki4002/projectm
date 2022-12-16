import logo from './logo.svg';
import './App.css';
import React from 'react';
import image_path from  "./images/css_logo.png";






class Skill_part extends React.Component {
  
   
    
    render() {
      
  
      return (
          <div className="">
            <img src={image_path} className="block"/>
            <div className="text-center">{this.props.name}</div>
          </div>
          
      );

    }
  
 
}


export default Skill_part;