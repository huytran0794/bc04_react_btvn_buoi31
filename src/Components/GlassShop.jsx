import React, { Component } from "react";
import { dataGlasses } from "../data";
import GlassList from "./GlassList";
import Model from "./Model";
export default class GlassShop extends Component {
  state = {
    dataGlasses,
    currentGlass: "",
  };

  handleChooseGlass = (glass) => {
    this.setState({
      currentGlass: glass,
    });
  };

  render() {
    return (
      <div className="container vglasses py-3">
        <div className="row justify-content-between">
          <div className="col-6 vglasses__left">
            <div className="row">
              <div className="col-12">
                <h1 className="mb-2">Virtual Glasses</h1>
              </div>
            </div>
            <div className="container container-fluid">
              <div className="row" id="vglassesList">
                <GlassList
                  dataGlasses={dataGlasses}
                  handleChooseGlass={this.handleChooseGlass}
                />
              </div>
            </div>
          </div>
          <div className="col-5 vglasses__right p-0">
            <div className="vglasses__card">
              <Model glass={this.state.currentGlass}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
