import logo from './logo.svg';
import './App.css';
import React from 'react';
import Skill_part from './Skill_part';




class Skill extends React.Component {
  
   
    
    render() {
  
      const skill_parts = [
        {
            name: "php",
            image_url: "php_logo.png"
        },
        {
            name: "html",
            image_url: "html_logo.png"
        },
        {
            name: "css",
            image_url: "css_logo.png"
        },
        {
            name: "javascript",
            image_url: "javascript_logo.png"
        }
    ];
      return (
          <div className="pt-28 " id="skill"> 
            <div className="wrapper max-w-7xl m-auto px-9">
              <h1 className="text-center text-4xl">SKILL</h1>
              <div className="flex justify-between flex-wrap mt-7">
                {skill_parts.map((skill_part) => (
                    <Skill_part name={skill_part.name} image_url={skill_part.image_url}/>
                ))}
              </div>
            </div>
          </div>
      );

    }
  
 
}


export default Skill;