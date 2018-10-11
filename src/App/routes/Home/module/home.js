// LIBRARIES
import update from "immutability-helper";
import constants from "./actionContants";

const {
  GET_NEWS_FEED,
  SELECT_NEWS
} = constants;

//get news 
export function functionGetNews(){
  return(dispatch)=>{
    const news = JSON.parse(localStorage.getItem("news"));

    if(news && news.length > 0){
      dispatch({
        type:GET_NEWS_FEED,
        payload:news
      })
    };
  }
}

//select news
export function selectNews(payload){
  return(dispatch)=>{
    dispatch({
      type:SELECT_NEWS,
      payload:payload
    })
    
  }
}

//handle get news
function handleGetNewsFeed(state, action){
  return update(state, {
    newsFeed:{
      $set:action.payload
    }
  });
}

//handle select news
function handleSelectNews(state, action){
  return update(state, {
    selectedArticle:{
      $set:action.payload
    }
  });
}

const ACTION_HANDLERS = {
  GET_NEWS_FEED:handleGetNewsFeed,
  SELECT_NEWS:handleSelectNews
};

const initialState = {
  newsFeed:[],
  selectedArticle:{}
};

export default function HomeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
