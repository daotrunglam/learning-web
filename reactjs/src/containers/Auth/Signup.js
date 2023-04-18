import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";
import { handleLoginApi } from "../../services/userService";
import Login from "./Login";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
    };
  }
  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  // handleLogin = async () => {
  //   this.setState({
  //     errMessage: " ",
  //   });

  //   try {
  //     let data = await handleLoginApi(this.state.username, this.state.password);
  //     if (data && data.errCode !== 0) {
  //       this.setState({
  //         errMessage: data.message,
  //       });
  //     }
  //     if (data && data.errCode === 0) {
  //       this.props.userLoginSuccess(data.user);
  //       // console.log("login succeeds");
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       if (error.response.data) {
  //         this.setState({
  //           errMessage: error.response.data.message,
  //         });
  //       }
  //     }

  //     console.log("bepcuanem", error.response);
  //   }
  // };
  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  render() {
    //JSX

    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 login-text">Signup</div>
            <div className="col-12 form-group login-input">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email address or phone number"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUsername(event)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Create password</label>
              <div className="custom-input-password">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Create password"
                  onChange={(event) => this.handleOnChangePassword(event)}
                />
                <span onClick={() => this.handleShowHidePassword()}>
                  <i
                    className={
                      this.state.isShowPassword
                        ? "far fa-eye"
                        : "far fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12 form-group login-input">
              <label>Confirm password</label>
              <div className="custom-input-password">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Confirm password"
                  onChange={(event) => this.handleOnChangePassword(event)}
                />
                <span onClick={() => this.handleShowHidePassword()}>
                  <i
                    className={
                      this.state.isShowPassword
                        ? "far fa-eye"
                        : "far fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>

            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <div className="col-12">
              <button
                className="btn-login"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Signup
              </button>
            </div>
            <div className="col-12 text-center">
              <span className="forgot-password">
                Already have an account? {}
                <a href="#" className="link signup-link">
                  Login
                </a>
              </span>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="text-other-login">Or Sign In Using</span>
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-facebook-f facebook"></i>
              <i className="fab fa-google-plus-g google"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // adminLoginSuccess: (adminInfo) =>
    //   dispatch(actions.adminLoginSuccess(adminInfo)),
    // userLoginFail: () => dispatch(actions.adminLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
