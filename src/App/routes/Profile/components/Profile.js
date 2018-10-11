import React, { Component } from "react";
import Page from "../../../components/Page";
import "./ProfileStyles.css";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // showDevApp:false
    };
  }
  componentDidMount(){
    console.log(this.props.translations);
  }
  render() {
    const { first_name, last_name, password} = this.props.profileInput;
    return (
      <Page id="profile">
        <form onSubmit={(ev)=>this.props.saveEdit(ev)}>
        <div className="container">
          <div className="row">
          <h1>Edit Profile Information</h1>
          <div className="col-12">
          <div className="edit">
          <label>First Name</label>
          <input
            className="form-control editInput"
            label="user"
            type="text"
            name="name"
            onChange={(ev)=>this.props.getProfileInput({
              key:"first_name",
              value:ev.target.value
            })}
            value={first_name || ""}
            />
            </div>
            </div>
          <div className="col-12">
          <label>Last Name</label>
          <input
            className="form-control editInput"
            type="text"
            name="name"
            onChange={(ev)=>this.props.getProfileInput({
              key:"last_name",
              value:ev.target.value
            })}
            value={last_name || ""}
            />
            </div>
          <div className="col-12">
          <label>Password</label>
          <input
            className="form-control editInput"
            type="password"
            name="password"
            onChange={(ev)=>this.props.getProfileInput({
              key:"password",
              value:ev.target.value
            })}
            value={password || ""}
            />
          <input
            className="btn btn-info"
            type="submit"
            value="Save"
            />
            </div>
            </div>
          </div>
      </form>
      </Page>
    );
  }
}

export default Profile;