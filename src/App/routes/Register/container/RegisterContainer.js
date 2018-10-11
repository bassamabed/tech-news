
// LIBRARIES
import { connect } from "react-redux";
// COMPONENTS
import Register from "../components/Register";
import {
  getRegisterInput,
  registerUser
} from "../module";

const mapStateToProps = state => ({
  registerInput: state.register.registerInput,
  currentUser: state.login.currentUser
});

const mapActionCreators = {
  getRegisterInput,
  registerUser
};
export default connect(mapStateToProps, mapActionCreators)(Register);
