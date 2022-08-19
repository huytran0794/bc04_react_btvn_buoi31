import React, { Component } from "react";
import Glass from "./Glass";
export default class GlassList extends Component {
  render() {
    {
      return this.props.dataGlasses.map((glass, idx) => {
        return (
          <Glass
            key={idx.toString() + glass.id}
            glass={glass}
            handleChooseGlass={this.props.handleChooseGlass}
          />
        );
      });
    }
  }
}
