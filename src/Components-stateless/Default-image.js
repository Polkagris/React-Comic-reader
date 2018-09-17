import React, { Component } from 'react';
import '../App.css';
import MyComponent from '../Mycomp.js'

// Pass state.url to image src

class Defaultimage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      childUrl: 'https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80'
    }
    this.nextImage = this.nextImage.bind(this);
  }
  // Change default image
  nextImage(){
  console.log("test complete");
  // Change url state
  this.setState({childUrl: "https://images.unsplash.com/photo-1523480429206-eb448003a1c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9bd24be13facae53061d2b794b95ddf&auto=format&fit=crop&w=1350&q=80"});
  }
  render(){
    return(
      <div className="row">
        <h2>ChildComponent url: {this.state.childUrl}!</h2>
        <img id="defaultImage" className="col-lg-8" src={this.state.childUrl} onClick={this.nextImage}>
        </img>
      </div>
    );
  }

}



export default Defaultimage;
