import { connect } from "react-redux";
import Home from "../components/Home";

import {
  functionGetNews,
  selectNews
} from "../module/home";

const mapStateToProps = (state) => ({
  locale: state.intl.locale,
  translations: state.intl.translations,
  newsFeed: state.home.newsFeed,
  selectedArticle: state.home.selectedArticle
});

const mapDispatchToProps = {
  functionGetNews,
  selectNews
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);