import React, { Component } from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State',
      counter: 0,
      url: 'https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80'
    };
    this.handleClick = this.handleClick.bind(this);
    this.nextImage = this.nextImage.bind(this);
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

  // Change default image
  nextImage(){
  console.log("test complete");
  // Change url state
  this.setState({url: "https://images.unsplash.com/photo-1523480429206-eb448003a1c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9bd24be13facae53061d2b794b95ddf&auto=format&fit=crop&w=1350&q=80"});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
        <button onClick={this.nextImage}>Click For Next Image</button>
      </div>
    );
  }
};

export default MyComponent;
