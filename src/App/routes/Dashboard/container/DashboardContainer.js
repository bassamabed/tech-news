import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";

import {
  showArticleForm,
  getInput,
  saveArticle,
  functionGetNews,
  toggleApprove
} from "../module/dashboard";

const mapStateToProps = (state) => ({
  locale: state.intl.locale,
  newsFeed: state.dashboard.newsFeed,
  selectedArticle: state.dashboard.selectedArticle,
  showForm: state.dashboard.showForm,
  getInput: state.dashboard.loginInput,
  currentUser: state.login.currentUser
});

const mapDispatchToProps = {
  showArticleForm,
  getInput,
  saveArticle,
  functionGetNews,
  toggleApprove
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);