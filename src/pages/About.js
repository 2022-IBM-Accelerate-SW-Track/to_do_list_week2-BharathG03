import React, { Component } from 'react';
import "./About.css";
import mypic from '../assets/mypic.png';

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              // Image goes here
              src={mypic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title"><h1>Bharadwaj Kalyan Gadiyaram</h1></div>
            <div className="brief_description">
              I am a raising Sophomore at UNC Chapel Hill. When I am bored I love going on walks or riding my bike.
            </div>
          </div>
        </div>
      </div>
    )
  }
}