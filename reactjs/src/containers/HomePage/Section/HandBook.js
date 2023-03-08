import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class HandBook extends Component {
  render() {
    return (
      <div className="section-share section-handbook">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cẩm nang</span>
            <button className="btn-section">Tất cả bài viết</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div className="title-image">Cột sống 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div className="title-image">Cột sống 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div className="title-image">Cột sống 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div className="title-image">Cột sống 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div className="title-image">Cột sống 5</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div className="title-image">Cột sống 6</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Cột sống 7</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
