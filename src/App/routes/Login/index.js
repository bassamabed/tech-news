import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Page from "../../components/Page";

import { loginUser } from "../../../modules/auth";

const Login = props => (
  <Page id="login" title="Login" description="We need to log in to stuff.">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <input type="text" name="email" />
          </div>
          <div className="form-group">
            <input type="password" name="password" />
          </div>
          <div className="form-group">
            <button type="submit">
              Login
            </button>
          </div>
        </div>
      </div>

    </div>
  </Page>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loginUser }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Login);
