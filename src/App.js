import React, { Component } from 'react';
import './App.css';
import Defaultimage from '../src/Components-stateless/Default-image.js';
import Thumbnails from '../src/Components-stateless/Thumbnails.js';
import MyComponent from './Mycomp.js'


// Component with state - navigation between images
  // Button click: defaultImage -> next thumbnail
    // Initial state: defaultImage - onClick -> change state (img src)

class App extends Component {
  render() {

    // Change the default image
      function nextDefaultImg(){
        console.log("123");
      };
    return (
      <div className="App">
        <div className="container">

          <h1 id="title">Comic Reader</h1>
          <Defaultimage onClick={this.nextDefaultImg} name="Christopher" url="https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80" />
          <MyComponent/>
          <Thumbnails/>

        </div>
      </div>
    );
  }
}

export default App;
