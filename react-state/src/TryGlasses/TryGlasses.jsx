import React, { Component } from "react";

export default class TryGlasses extends Component {
  render() {
    return (
      <div>
        <header className="bg-dark text-white text-center opacity-75 py-4" style={{position:'relative', zIndex:10}}>
          <h3>TRY GLASSES APP ONLINE</h3>
        </header>
        <section
          className="carousel bg-dark"
          style={{ backgroundImage: "url(./img/background.jpg", backgroundRepeat:'no-repeat', backgroundPosition:'center-center', backgroundSize:'cover', position:'absolute', top:0, left:0, width:'100%', paddingTop:'160px'}}>
          <div className="container">
            <div className="row">
              <div className="col-6 w-50">
                <img src="./img/model.jpg" alt="..." className="w-50" />
              </div>
              <div className="col-6 w-50">
                <img src="./img/model.jpg" alt="..." className="w-50" />
              </div>
            </div>
            <div className="row bg-white mt-5 border">
                <div className="item d-flex flex-wrap pt-5 ps-5">
                <img src="./img/v1.png" alt="..." style={{width:'15%', marginRight:'15px', marginBottom:'40px', border:'1px solid'}}/>
                <img src="./img/v2.png" alt="..." style={{width:'15%', marginRight:'15px', marginBottom:'40px', border:'1px solid'}}/>
                <img src="./img/v3.png" alt="..." style={{width:'15%', marginRight:'15px', marginBottom:'40px', border:'1px solid'}}/>
                <img src="./img/v4.png" alt="..." style={{width:'15%', marginRight:'15px', marginBottom:'40px', border:'1px solid'}}/>
                <img src="./img/v5.png" alt="..." style={{width:'15%', marginRight:'15px', marginBottom:'40px', border:'1px solid'}}/>
                <img src="./img/v6.png" alt="..." style={{width:'15%', marginRight:'15px', marginBottom:'40px', border:'1px solid'}}/>
                <img src="./img/v7.png" alt="..." style={{width:'15%', marginRight:'15px', marginBottom:'40px', border:'1px solid'}}/>
                <img src="./img/v8.png" alt="..." style={{width:'15%', marginRight:'15px', marginBottom:'40px', border:'1px solid'}}/>
                <img src="./img/v9.png" alt="..." style={{width:'15%', marginRight:'10px', marginBottom:'40px', border:'1px solid'}}/>
                </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
