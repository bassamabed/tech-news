// LIBRARIES
import update from "immutability-helper";
import constants from "./actionContants";
import Cookies from "js-cookie";

const {
  GET_PROFILE_INPUT,
  SAVE_EDIT
} = constants;

export function getProfileInput(payload){
  return {
    type:GET_PROFILE_INPUT,
    payload
  };
}

export function saveEdit(ev){
  ev.preventDefault();
  return (dispatch, store)=>{
    const { profileInput } = store().profile;

      let users = (localStorage.getItem("users") !== null) ? JSON.parse(localStorage.getItem("users")) : [];
      const userExists = users.map(function(e) { return e.email; }).indexOf(profileInput.email);
      //console.log("usrs", users)
      if(userExists !== -1){
        users[userExists] = profileInput;
        localStorage.setItem("users", JSON.stringify(users));
        Cookies.set("currentUser", users[userExists]);

        dispatch({
          type:SAVE_EDIT
        })
        alert("Saved!");
        setTimeout(()=>{
          window.location.reload();
        }, 2000);
      }

  };
}

function handleGetProfileInput(state, action){
  const { key, value } = action.payload;
  return update(state, {
    profileInput:{
      [key]:{
        $set:value
      }
    }
  });
}

const ACTION_HANDLERS = {
  GET_PROFILE_INPUT:handleGetProfileInput
};

const initialState = {
  profileInput:Cookies.getJSON("currentUser") || {}
};

export default function HomeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
