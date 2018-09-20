import React, { Component } from 'react';
import '../App.css';
import MyComponent from '../Mycomp.js';
import Thumbnails from './Thumbnails.js';
import App from '../App.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'



import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight  } from '@fortawesome/free-solid-svg-icons'

import * as Icons from "@fortawesome/free-solid-svg-icons"


// Navigation: Clickable icons navigates between images
  // Import font awesome
  // Create stateless component that renders the icons



class Defaultimage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      childUrl: 'https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80',
      thumb1: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=1350&q=80',
      thumb2: 'https://images.unsplash.com/photo-1523480429206-eb448003a1c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9bd24be13facae53061d2b794b95ddf&auto=format&fit=crop&w=1350&q=80',
      thumb3: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7491eb281478f3b97661bae38cbcb34b&auto=format&fit=crop&w=1951&q=80',
      thumb4: 'https://images.unsplash.com/photo-1517770413964-df8ca61194a6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a2a753a335178a63b40af45ed76f78f&auto=format&fit=crop&w=1350&q=80'
    }
    this.nextImage = this.nextImage.bind(this);
    this.clickedThumbnail = this.clickedThumbnail.bind(this);
    this.LeftArrow = this.LeftArrow.bind(this);
  }
  // Change default image onClick
  nextImage(){
    if(this.state.childUrl == 'https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80'){
      this.setState({
        childUrl: this.state.thumb1
      });
    }
    else if(this.state.childUrl == this.state.thumb1){
      this.setState({
        childUrl: this.state.thumb2
      });
    }
    else if(this.state.childUrl == this.state.thumb2){
      this.setState({
        childUrl: this.state.thumb3
      });
    }
    else if(this.state.childUrl == this.state.thumb3){
      this.setState({
        childUrl: this.state.thumb4
      });
    }
    else if(this.state.childUrl == this.state.thumb4){
      this.setState({
        childUrl: 'https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80'
      });
    }
  }

  clickedThumbnail(selectedThumbnail){
    this.setState({
      childUrl: selectedThumbnail.target.src
    });
  }

  // Function: click on left navigation to go one back
  LeftArrow(){
  if(this.state.childUrl == 'https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80'){
    this.setState({
      childUrl: this.state.thumb4
    });
  }
  else if(this.state.childUrl == this.state.thumb1){
    this.setState({
      childUrl: 'https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80'
    });
  }
  else if(this.state.childUrl == this.state.thumb2){
    this.setState({
      childUrl: this.state.thumb1
    });
  }
  else if(this.state.childUrl == this.state.thumb3){
    this.setState({
      childUrl: this.state.thumb2
    });
  }
  else if(this.state.childUrl == this.state.thumb4){
    this.setState({
      childUrl: this.state.thumb3
    });
  }
}

  render(){
    let defaultImage = ['https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80',
    'https://images.unsplash.com/photo-1517770413964-df8ca61194a6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a2a753a335178a63b40af45ed76f78f&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7491eb281478f3b97661bae38cbcb34b&auto=format&fit=crop&w=1951&q=80',
    'https://images.unsplash.com/photo-1523480429206-eb448003a1c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9bd24be13facae53061d2b794b95ddf&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=1350&q=80'];


    return(
      <div>
        <div className="row">
        <img id="defaultImage" className="col-lg" src={this.state.childUrl} onClick={this.nextImage}></img>
        </div>
        <div className="row">
          <DoubleLeftIcon onClick={this.nextImage} />
          <LeftIcon onClick={this.LeftArrow} />
          <RightIcon onClick={this.nextImage} />
          <DoubleRightIcon onClick={this.nextImage} />
        </div>
        <div>
          <ThumbnailsTest onClick={this.clickedThumbnail} thumbnail={this.state.childUrl}/>
        </div>
      </div>
    );
  }
}



  let ThumbnailsTest = ({onClick, thumbnail}) => (
    <div id="thumbnails">
      <img onClick={onClick} id="thumb1" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=1350&q=80" alt=""></img>
      <img onClick={onClick} id="thumb2" src="https://images.unsplash.com/photo-1523480429206-eb448003a1c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9bd24be13facae53061d2b794b95ddf&auto=format&fit=crop&w=1350&q=80" alt=""></img>
      <img onClick={onClick} id="thumb3" src="https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7491eb281478f3b97661bae38cbcb34b&auto=format&fit=crop&w=1951&q=80" alt=""></img>
      <img onClick={onClick} id="thumb4" src="https://images.unsplash.com/photo-1517770413964-df8ca61194a6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a2a753a335178a63b40af45ed76f78f&auto=format&fit=crop&w=1350&q=80" alt=""></img>
    </div>
  );

  let DoubleLeftIcon = ({onClick}) => (
    <div className="navigation">
        <FontAwesomeIcon icon={Icons.faAngleDoubleLeft}  size="3x" />
    </div>
  );
  let LeftIcon = ({onClick}) => (
    <div className="navigation">
        <FontAwesomeIcon onClick={onClick} icon={Icons.faAngleLeft} size="3x" />
    </div>
  );
  let RightIcon = ({onClick}) => (
    <div className="navigation">
        <FontAwesomeIcon onClick={onClick} icon={Icons.faAngleRight} size="3x" />
    </div>
  );
  let DoubleRightIcon = ({onClick}) => (
    <div className="navigation">
        <FontAwesomeIcon icon={Icons.faAngleDoubleRight} size="3x" />
    </div>
  );




export default Defaultimage;
