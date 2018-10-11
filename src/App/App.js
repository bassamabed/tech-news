// The basics
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";

// Action creators and helpers
import { establishCurrentUser } from "./routes/Login/module";
import { isServer } from "../store";

import Header from "./components/Header";
import Routes from "./routes";

import en from "react-intl/locale-data/en";
import ms from "react-intl/locale-data/ms";
import { addLocaleData } from "react-intl";
import { IntlProvider } from "react-intl";

import { updateIntl } from "react-intl-redux";

addLocaleData([...en, ...ms]);

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDevApp:false
    };
  }
  componentWillMount() {
    if (!isServer) {
      this.props.establishCurrentUser();
    }
  }

  render() {
    return (
      <IntlProvider locale={this.props.locale} defaultLocale={"en"} messages={this.props.translations}>
        <div id="app">
          <Header
            isAuthenticated={this.props.isAuthenticated}
            current={this.props.location.pathname}
          />
          <div id="content">
            <Routes />
          </div>
        </div>
      </IntlProvider>
    );
  }
}

function updateMessages(locale) {
  return (dispatch, state)=> {
    dispatch(updateIntl({
      locale,
      translations: state().translations[locale]
    }));
  };
}
const mapStateToProps = state => ({
  locale: state.intl.locale,
  translations: state.intl.translations,
  isAuthenticated: state.login.isAuthenticated
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ establishCurrentUser, updateMessages }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
