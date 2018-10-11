import { connect } from "react-redux";
import Profile from "../components/Profile";

import {
  getProfileInput,
  saveEdit
} from "../module/profile";

const mapStateToProps = (state) => ({
  locale: state.intl.locale,
  translations: state.intl.translations,
  profileInput: state.profile.profileInput
});

const mapDispatchToProps = {
  getProfileInput,
  saveEdit
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);