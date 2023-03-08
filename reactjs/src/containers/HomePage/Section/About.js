import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          Truyền thông nói gì về channel Bếp của Nem
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/z7S2iTWlShg"
              title="Quả dừa bé bằng quả cau"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-center">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/PtWkpJr2ktw"
              title="Nem diễn hài"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Xin chào! Tôi là Nem (một chú mèo anh lông dài cái) trắng tinh
              khiết và xinh đẹp. Với bộ lông dài mềm mại, tôi thường được khen
              ngợi về vẻ đẹp của mình và tôi rất tự hào về điều đó. Tôi rất
              thích vận động và chơi đùa, nhưng cũng rất thích nghỉ ngơi và len
              lén nằm trên cái tủ để nghỉ ngơi. Tôi rất thân thiện và yêu
              thương, và tôi thường đón chào ba mẹ về bằng một màn biểu diễn đó
              là vũ điệu cào móng trên xốp để được ăn pate và xoa cổ. Tôi cũng
              rất thông minh và có nhiều kỹ năng tự vệ. Tôi thường xuyên vận
              động và tập luyện để giữ cho sức khỏe và thể chất của mình luôn
              tốt. Tôi cũng rất sạch sẽ và thích tự lấy tự vệ. Cảm ơn bạn đã đọc
              giới thiệu về tôi!
            </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
