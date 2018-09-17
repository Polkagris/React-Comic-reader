import React, { Component } from 'react';
import Defaultimage from './Components-stateless/Default-image.js';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State',
      counter: 0,
      url: 'https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // Toggle text
  handleClick() {
    if(this.state.counter % 2 == 0 || this.state.counter == 0){
      console.log("Counter % 2: "+this.state.counter);
      this.setState({name: 'React Rocks!'});
      this.setState({counter: this.state.counter + 1});
    }
    else if(this.state.counter % 2 != 0){
      this.setState({name: 'Initial State'});
      this.setState({counter: this.state.counter + 1});
    }
  }



  render() {
    return (
      <div>
        <Defaultimage/>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
        <button onClick={this.nextImage}>Click For Next Image</button>
      </div>
    );
  }
};

export default MyComponent;
