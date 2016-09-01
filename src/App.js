import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context){
    super(props, context);
  
    this.state = {
      webGLInstalled: false
    };
  }

  createShader(type, source) {
    let shader = this.gl.createShader(type);
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);
    let success = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
    if(success) {
      return shader;
    }

    console.log(this.gl.getShaderInfoLog(shader));
    this.gl.deleteShader(shader);
  }


  componentDidMount = () => {
    console.log('component did mount.');
    this.myCanvas = this.refs.myCanvas;
    this.gl = this.myCanvas.getContext('webgl');

    this.setState({ webGLInstalled: this.gl ? true : false });
  }

  render() {
    console.log('App render called.');
    let outputGL = this.state.webGLInstalled ? 'yes' : 'no';

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>WebGL React Demo application</h2>
        </div>
        <p className="App-intro">
          Web GL installed: {outputGL}
          <canvas ref="myCanvas" width="400" height="400"></canvas>
        </p>
      </div>
    );
  }
}

export default App;
