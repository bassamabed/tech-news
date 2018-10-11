import React, { Component } from "react";
import Page from "../../../components/Page";

import "./Register.css";


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return (
      <Page id="register" title="Register" description="We need to register to stuff.">
      <div className="container">
          <form id="register" onSubmit={(ev)=>this.props.registerUser(ev)}>
            <div className="row">
              <div className="col-md-12">

                <div className="form-group">
                  <label>Role</label>
                  <select 
                    className="form-control"
                    onChange={(ev)=>this.props.getRegisterInput({
                      key:"role",
                      value:ev.target.value
                    })}
                  >
                    <option>-Please select-</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    required
                    onChange={(ev)=>this.props.getRegisterInput({
                      key:"first_name",
                      value:ev.target.value
                    })}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    required
                    onChange={(ev)=>this.props.getRegisterInput({
                      key:"last_name",
                      value:ev.target.value
                    })}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    required
                    onChange={(ev)=>this.props.getRegisterInput({
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
                    required
                    onChange={(ev)=>this.props.getRegisterInput({
                      key:"password",
                      value:ev.target.value
                    })}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    required
                    onChange={(ev)=>this.props.getRegisterInput({
                      key:"confirm_password",
                      value:ev.target.value
                    })}
                  />
                </div>

                <div className="btnGroup">
                <div className="form-group">
                  <input type="submit" value="Sign up" className="btn btn-primary"  />
                </div>
                <div className="form-group pull-left">
                  <input type="reset" value="Reset" className="btn btn-primary" />
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

