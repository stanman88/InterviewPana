import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = { serverResponse: "" };
  }

  callAPIServer() {
      fetch("http://localhost:7000/Customer")
          .then(res => res.text())
          .then(res => this.setState({ serverResponse: res }))
          .catch(err => err);
  }
  
  componentDidMount() {   // react lifecycle method componentDidMount() 
                        //will execute the callAPIserver() method after the component mounts.
      this.callAPIServer();

  }
  render() {
      return (
          <div className="App">
              <header className="App-header">
        <h1 className="App-title">Guest List</h1>
              </header>

              <li className="App-intro">{this.state.serverResponse}</li> 
          </div>
          
      );
  }
}

export default App;
