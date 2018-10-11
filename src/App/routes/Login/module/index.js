// LIBRARIES
import update from "immutability-helper";
import constants from "./actionContants";
import Cookies from "js-cookie";
import request from "../../../../utils/requestsWrapper.js";

const {
  GET_LOGIN_INPUT,
  LOGIN_USER,
  GET_CURRENT_USER,
  ESTABLISH_CURRENT_USER,
  LOGOUT_USER
} = constants;


//GET_REGISTRATION_INPUT
export function getLoginInput(payload){
  return {
    type:GET_LOGIN_INPUT,
    payload
  };
}

//LOGIN_USER
export function loginUser(ev){
  ev.preventDefault();
  return (dispatch, store)=>{
    const { loginInput } = store().login;

    const users = (localStorage.getItem("users") !== null) ? JSON.parse(localStorage.getItem("users")) : [];
    const userExists = users.map(function(e) { return e.email; }).indexOf(loginInput.email);
    if(userExists !== -1){
      if(users[userExists].password === loginInput.password){
        console.log("users", userExists);
        dispatch({
          type:LOGIN_USER,
          payload:users[userExists]
        });
        Cookies.set("currentUser", users[userExists]);
      }else{
        alert("Invalid username or password!");
      }
    }else{
      alert("Invalid username or password!");
    }
   
  };
}

//GET_CURRENT_USER
export function getCurrentUser(userId, tokenID){
  return (dispatch, store)=>{
    // Send a GET request
    return request({
      method: "get",
      url: "/Users/" + userId,
      params: {
        access_token:tokenID
      }
    }).then((resp) => {
      dispatch({
        type:GET_CURRENT_USER,
        payload:resp.data
      });
      Cookies.set("currentUser", resp.data);
    });
  };
}

//ESTABLISH_CURRENT_USER
export function establishCurrentUser(){
  return (dispatch, store)=>{
    let userFromCookie = Cookies.getJSON("currentUser");
    if (userFromCookie){
      dispatch({
        type:ESTABLISH_CURRENT_USER,
        payload:userFromCookie
      });
    }
  };
}

//LOGOUT USER
export function logoutUser(){
  return (dispatch, store)=>{
    dispatch({
      type:LOGOUT_USER,
    });
    Cookies.remove("currentUser");
    localStorage.removeItem("tokenID");

  };
}

//handle get Login input
function handleGetLoginInput(state, action){
  const { key, value } = action.payload;
  return update(state, {
    loginInput:{
      [key]:{
        $set:value
      }
    }
  });
}


function handleGetCurrentUser(state, action){
  return update(state, {
    currentUser:{
      $set:action.payload
    },
    isAuthenticated:{
      $set:true
    }
  });
}

function handleEstablishCurrentUser(state, action){
  return update(state, {
    currentUser:{
      $set:action.payload
    },
    isAuthenticated:{
      $set:true
    }
  });
}

function handleLogoutUser(state, action){
  return update(state, {
    currentUser:{
      $set:{}
    },
    isAuthenticated:{
      $set:false
    }
  });
}

function handleLoginUser(state, action){
  return update(state, {
    currentUser:{
      $set:action.payload
    },
    isAuthenticated:{
      $set:true
    }
  });
}

const ACTION_HANDLERS = {
  GET_LOGIN_INPUT:handleGetLoginInput,
  GET_CURRENT_USER: handleGetCurrentUser,
  ESTABLISH_CURRENT_USER: handleEstablishCurrentUser,
  LOGOUT_USER: handleLogoutUser,
  LOGIN_USER:handleLoginUser
};

const initialState = {
  loginInput:{}
};

export default function LoginReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
