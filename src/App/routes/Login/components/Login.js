import React, { Component } from "react";
import Page from "../../../components/Page";

import "./Login.css";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return (
      <Page id="login" title="Login" description="We need to log in to stuff.">
        <div className="container">
          <form id="login" onSubmit={(ev)=>this.props.loginUser(ev)}>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    onChange={(ev)=>this.props.getLoginInput({
                      key:"email",
                      value:ev.target.value
                    })}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    onChange={(ev)=>this.props.getLoginInput({
                      key:"password",
                      value:ev.target.value
                    })}
                  />
                </div>
                <div className="btnGroup">
                <div className="form-group">
                  <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
                <div className="form-group">
                  <input type="submit" value="Reset Password" className="btn btn-primary" />
                </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Page>
    );
  }
}

