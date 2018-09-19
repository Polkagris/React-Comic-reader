import React, { Component } from 'react';
import '../App.css';
import Defaultimage from './Default-image.js';

const Thumbnails = (props) =>{
  //this.clickedThumbnail = this.clickedThumbnail.bind(this);
  return(
    <div id="thumbnails">
      <img onClick={props.clickedThumbnail} id="thumb1" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=1350&q=80" alt="">{props.thumb1}</img>
      <img id="thumb2" src="https://images.unsplash.com/photo-1523480429206-eb448003a1c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9bd24be13facae53061d2b794b95ddf&auto=format&fit=crop&w=1350&q=80" alt=""></img>
      <img id="thumb3" src="https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7491eb281478f3b97661bae38cbcb34b&auto=format&fit=crop&w=1951&q=80" alt=""></img>
      <img id="thumb4" src="https://images.unsplash.com/photo-1517770413964-df8ca61194a6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a2a753a335178a63b40af45ed76f78f&auto=format&fit=crop&w=1350&q=80" alt=""></img>
    </div>
  );
}


export default Thumbnails;
