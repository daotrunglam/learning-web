import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorExtraInfo.scss";
import moment from "moment";
import localization from "moment/locale/vi";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils";

class DoctorExtraInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetailInfo: false,
    };
  }

  async componentDidMount() {}

  async componentDidUpdate(prevProps, prevState, snapshot) {}

  showHideDetailInfo = (status) => {
    this.setState({
      isShowDetailInfo: status,
    });
  };

  render() {
    let { isShowDetailInfo } = this.state;
    return (
      <div className="doctor-extra-info-container">
        <div className="content-up">
          <div className="text-address">Địa chỉ phòng khám</div>
          <div className="name-clinic">Phòng khám chuyên khoa da liễu</div>
          <div className="detail-address">
            207 Phố Huế - Hai Bà Trưng - Hà Nội
          </div>
        </div>
        <div className="content-down">
          {isShowDetailInfo === false && (
            <div className="short-info">
              Giá khám: 250.000đ.{" "}
              <span onClick={() => this.showHideDetailInfo(true)}>
                Xem chi tiết
              </span>
            </div>
          )}
          {isShowDetailInfo === true && (
            <>
              <div className="title-price">Giá khám</div>
              <div className="detail-info">
                <div className="price">
                  <span className="left">Giá khám</span>
                  <span className="right">250.000đ</span>
                </div>
                <div className="note">
                  Được ưu tiên khám trước khi đặt khám qua
                </div>
              </div>
              <div className="payment">Người bệnh có thể thanh toán</div>
              <div className="hide-price">
                <span onClick={() => this.showHideDetailInfo(false)}>
                  Ẩn bảng giá
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfo);
