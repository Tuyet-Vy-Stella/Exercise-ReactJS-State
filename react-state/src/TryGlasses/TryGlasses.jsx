import React, { Component } from "react";
import dataGlasses from '../Data/dataGlasses.json';

export default class TryGlasses extends Component {

    renderGlassesList = () => {
        return dataGlasses.map((glassesItem, index) => {
            return <img style={{width:'15%', marginRight:'14px', border:'solid 1px', marginBottom:'30px', cursor:'pointer'}} key={index} src={glassesItem.url}></img>
        })
        
    }


  render() {
    const glassesStyle = {
      width: "145px",
      top: "75px",
      right: "75px",
      opacity: "0.7",
    };

    const glassesInfo = {
      backgroundColor: "rgba(244, 164, 96, 0.6)",
      width: "250px",
      top: "204px",
      left: "273px",
      height: "100px",
      textAlign: "left",
    };

    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center-center",
          backgroundSize: "cover",
          minHeight: "1000px",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,.5)", minHeight: "1000px" }}>
          <h3
            className="text-center text-light p-5"
            style={{ backgroundColor: "rgba(0, 0, 0, .5" }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5">
              <div className="col-6">
                <div className="item position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: "250px" }}
                    src="./glassesImage/model.jpg"
                    alt="..."
                  />
                  <img
                    style={glassesStyle}
                    className="position-absolute"
                    src="./glassesImage/v1.png"
                    alt="..."
                  />
                  <div style={glassesInfo} className="glasses-info position-relative">
                    <p style={{color:'#6A5ACD'}} className="fw-bold fs-4">Name</p>
                    <p className="fs-6 text-white">Details</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="glasses-item container bg-light d-flex justify-content-space-between mt-5 p-5 flex-wrap">
                {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
