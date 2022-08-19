import React, { Component } from "react";

export default class Model extends Component {
  render() {
    let { glass } = this.props;
    let virtualGlassImg, glassInfo;
    if (glass) {
      virtualGlassImg = (
        <div class="glass">
          <img
            src={glass.url}
            class="glass-img"
            alt="Render hình ảnh mắt kính"
          />
        </div>
      );
      glassInfo = (
        <div class="container container-fluid">
          <div class="row">
            <div class="card-info col-12">
              <div class="header d-flex align-items-center mb-3 g-10">
                <p class="name text-uppercase">{glass.name}</p>
              </div>
              <div class="body d-flex align-items-center mb-3 g-10">
                <div class="price bg-danger text-center text-white py-1 px-3 rounded-lg d-flex align-items-center">
                  <span class="currency">$</span>
                  <span class="number">{glass.price}</span>
                </div>
                <p class="stock-status text-success">Stocking</p>
              </div>
              <div class="footer">
                <p class="desc text-white">{glass.desc}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <>
        <div className="vglasses__model" id="avatar">
          {virtualGlassImg}
        </div>
        <div id="glassesInfo" className="vglasses__info">
          {glassInfo}
        </div>
      </>
    );
  }
}
