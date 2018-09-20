import React, { Component } from 'react';
import './App.css';
import Defaultimage from '../src/Components-stateless/Default-image.js';
import Thumbnails from '../src/Components-stateless/Thumbnails.js';
import MyComponent from './Mycomp.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight  } from '@fortawesome/free-solid-svg-icons'


library.add(faStroopwafel, faAddressBook)
library.add(faAngleRight)


// Component with state - navigation between images
  // Button click: defaultImage -> next thumbnail
    // Initial state: defaultImage - onClick -> change state (img src)

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="container">
          <h1 id="title">Comic Reader</h1>
          <Defaultimage/>
          <MyComponent/>

        </div>
      </div>
    );
  }
}

export default App;
