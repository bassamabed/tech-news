import { combineReducers } from "redux";
import {intlReducer} from "react-intl-redux";

import login from "../App/routes/Login/module";
import profile from "../App/routes/Profile/module/profile";
import home from "../App/routes/Home/module/home";
import dashboard from "../App/routes/Dashboard/module/dashboard";
import register from "../App/routes/Register/module";

export default combineReducers({
  login,
  profile,
  home,
  register,
  dashboard,
  intl: intlReducer
});
