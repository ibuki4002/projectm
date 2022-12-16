import logo from './logo.svg';
import './App.css';
import React from 'react';




class Home extends React.Component {
  
   
    
    render() {
      
  
      return (
          <div className="py-56" id="home"> 
            <div className="wrapper max-w-7xl m-auto px-4">
              <h1 className="text-center text-6xl">IBUKI TANAKA</h1>
              <div className="text-center text-2xl">PORTFOLIO</div>
              <div className="text-center mt-5 text-2xl">
               三重大学に在学しています、田中伊吹といいます。<br></br>
               ユーザーとお客様が心から満足できるサイトをおつくり致します。<br></br>
               デザインとコーディングはおまかせください。
              </div>
            </div>
          </div>
      );

    }
  
 
}


export default Home;