import React, { Component } from "react";

export default class Glass extends Component {
  render() {
    return (
      <div className="col-4 col-md-4 col-sm-6 my-3">
        <div
          className="glass-item"
          id={this.props.glass.id}
          onClick={() => {
            this.props.handleChooseGlass(this.props.glass);
          }}
        >
          <img src={this.props.glass.url} className="glass-img" alt="" />
        </div>
      </div>
    );
  }
}
