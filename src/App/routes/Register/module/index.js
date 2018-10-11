// LIBRARIES
import update from "immutability-helper";
import constants from "./actionContants";
import Cookies from "js-cookie";
import request from "../../../../utils/requestsWrapper.js";

const {
  GET_REGISTER_INPUT,
  REGISTER_USER,
  GET_CURRENT_USER,
  ESTABLISH_CURRENT_USER,
  LOGOUT_USER
} = constants;


//GET_REGISTRATION_INPUT
export function getRegisterInput(payload){
  return {
    type:GET_REGISTER_INPUT,
    payload
  };
}

//REGISTER_USER
export function registerUser(ev){
  ev.preventDefault();
  return (dispatch, store)=>{
    const { registerInput } = store().register;
    console.log("registerInput", registerInput);
    if(registerInput.confirm_password !== registerInput.password){
      alert("Password does not match")
    }else{
      const users = (localStorage.getItem("users") !== null) ? JSON.parse(localStorage.getItem("users")) : [];
      const userExists = users.map(function(e) { return e.email; }).indexOf(registerInput.email);
      //console.log("usrs", users)
      if(userExists === -1){
        users.push(registerInput);
        localStorage.setItem("users", JSON.stringify(users));
        dispatch({
          type:REGISTER_USER,
          payload:registerInput
        })
        alert("Registration Success!");
        setTimeout(()=>{
          window.location.reload();
        }, 2000);
      }else{
        alert("Email address is taken!");
      }

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

//handle get registration input
function handleGetRegisterInput(state, action){
  const { key, value } = action.payload;
  return update(state, {
    loginInput:{
      [key]:{
        $set:value
      }
    }
  });
}

//handle get registration input
function handleGetRegisterInput(state, action){
  const { key, value } = action.payload;
  return update(state, {
    registerInput:{
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


const ACTION_HANDLERS = {
  GET_REGISTER_INPUT:handleGetRegisterInput,
  GET_CURRENT_USER: handleGetCurrentUser,
  ESTABLISH_CURRENT_USER: handleEstablishCurrentUser,
  LOGOUT_USER: handleLogoutUser
};

const initialState = {
  registerInput:{}
};

export default function LoginReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
