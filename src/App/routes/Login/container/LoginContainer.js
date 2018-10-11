
// LIBRARIES
import { connect } from "react-redux";
// COMPONENTS
import Login from "../components/Login";
import {
  getLoginInput,
  loginUser
} from "../module";

const mapStateToProps = state => ({
  loginInput: state.login.loginInput,
  currentUser: state.login.currentUser
});

const mapActionCreators = {
  getLoginInput,
  loginUser
};
export default connect(mapStateToProps, mapActionCreators)(Login);
