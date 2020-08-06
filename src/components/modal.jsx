import React from "react";
export default class Modal extends React.Component {
    onClose = e => {
      this.props.onClose && this.props.onClose(e);
    };
    render() {
      if (!this.props.show) {
        return null;
      }
      return (
        <div class="modal" id="modal">
          <h2 className="modal-title">About SFRider</h2>
          <div className="content-container">
              <p className="modal-content">
                This project is focused on displaying data from API endpoints in novel and engaging ways. <br />
                I used an open source library called React-Leaflet to draw the maps and used OpenSF datasets as API endpoints. <br />
                I designed my own .png markers using Preview and utilized built-in leaflet.js functionality to draw paths and shapes. <br />
                As a bonus, I created a custom "legend" component which is displayed on one of the maps.<br />
                <br />
              </p>
              <p className="modal-content-2">
                Each of the 6 maps gives a different snapshot of the SF biking experience. 
                <br />* Traffic uses bike traffic data because other than red lights, SF is pretty bike friendly place.
                <br />* Racks are bikeracks listed by year installed.
                <br />* Crime uses The OpenSF Crime data, which is filtered for theft of property crimes.
                <br />* The last three maps, Routes, All and Scenic, are using OpenSF datasets of bike lanes all over the city. 
                <br />* The 4 different levels of lanes are color coordinated and when clicked give a brief description of the type of lane.
                <br />* The Scenic map showcases three of San Francisco's world famouse bicycle riding experiences. 
                <br />
                </p>
              <p className="modal-content">

                <br />Check out some of my other great projects on my github <a className="portfolio-link" href="https://rawbdata.github.io/porfolio/" target="_blank">porfolio</a> page.
               </p>
              </div>
          <div class="actions">
              
            <button class="toggle-button" onClick={this.onClose}>
              To The Maps!

            </button>
          </div>
        </div>
      );
    }
  }