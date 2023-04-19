import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-medical-facility">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cơ sở y tế nổi bật</span>
            <button className="btn-section">Tìm kiếm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div className="title-image">
                  Bệnh viện Trung ương Quân đội 108 1
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div className="title-image">
                  Bệnh viện Trung ương Quân đội 108 2
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div className="title-image">
                  Bệnh viện Trung ương Quân đội 108 3
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div className="title-image">
                  Bệnh viện Trung ương Quân đội 108 4
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div className="title-image">
                  Bệnh viện Trung ương Quân đội 108 5
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div className="title-image">
                  Bệnh viện Trung ương Quân đội 108 6
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div> Bệnh viện Trung ương Quân đội 108 7</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div className="title-image">
                  Bệnh viện Trung ương Quân đội 108 8
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div className="title-image">
                  Bệnh viện Trung ương Quân đội 108 9
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div className="title-image">
                  Bệnh viện Trung ương Quân đội 108 10
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div className="title-image">
                  Bệnh viện Trung ương Quân đội 108 11
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div className="title-image">
                  Bệnh viện Trung ương Quân đội 108 12
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
