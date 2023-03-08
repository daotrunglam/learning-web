import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <p>
          &copy; 2023 Bếp của Nem. More information, please visit my youtube
          chanel.
          <a
            target="blank"
            href="https://www.youtube.com/channel/UCcvrbe7xPtWI4ddVKYphhlw"
          >
            &#9758; Click here &#9756;
          </a>
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
