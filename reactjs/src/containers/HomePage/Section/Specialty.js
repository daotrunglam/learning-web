import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class Specialty extends Component {
  render() {
    return (
      <div className="section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Chuyên khoa phổ biến</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div className="title-image">Cột sống 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div className="title-image">Cột sống 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div className="title-image">Cột sống 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div className="title-image">Cột sống 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div className="title-image">Cột sống 5</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div className="title-image">Cột sống 6</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Cột sống 7</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div className="title-image">Cột sống 8</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    //inject
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
