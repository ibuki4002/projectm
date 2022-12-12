import logo from './logo.svg';
import './App.css';
import React from 'react';


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
        <div>
          <h1>Hello, {name}.</h1>
          <input
            type="text"
            value={name}
            onChange={ e  => {
              this.setState({
                name: e.target.value
              })
            }}
          />
        </div>
      );

    }
  
 
}

export default App;
