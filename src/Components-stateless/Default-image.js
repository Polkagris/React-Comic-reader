import React, { Component } from 'react';
import '../App.css';
import MyComponent from '../Mycomp.js'

// Pass state.url to image src

const Defaultimage = (props) =>{
  return(
    <div className="row">
      <h2>ChildComponent name: {props.name} url: {props.url}!</h2>
      <img id="defaultImage" className="col-lg-8" src={props.url}>
      </img>
    </div>
  );
}



export default Defaultimage;
