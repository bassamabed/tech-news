// LIBRARIES
import update from "immutability-helper";
import constants from "./actionContants";

const {
  GET_NEWS_FEED,
  SELECT_NEWS,
  OPEN_EDIT_ARTICLE,
  SAVE_EDIT_ARTICLE,
  SAVE_ARTICLE,
  SHOW_FORM,
  GET_ARTICLE_INPUT,
  TOGGLE_APROVE

} = constants;

//MODULES REDUX
//
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


//GET_CONTENT_INPUT
export function getInput(payload){
  return {
    type:GET_ARTICLE_INPUT,
    payload
  };
}

/////SAVE ARTCLE//////////

export function saveArticle(ev){
  ev.preventDefault();
  console.log(ev);
  return(dispatch, store)=>{
    const { articleInput } = store().dashboard;
    const newArticleInput = {
      approved: false,
      createdAt: Date.now(),
      ...articleInput
    }
    const news = JSON.parse(localStorage.getItem("news"));
    if(news && news.length > 0){
      news.push(newArticleInput);
      localStorage.setItem("news", JSON.stringify(news));
      dispatch({
        type:SAVE_ARTICLE,
        payload:news
      })
    }else{
      localStorage.setItem("news", JSON.stringify([newArticleInput]));
      dispatch({
        type:SAVE_ARTICLE,
        payload:[newArticleInput]
      })
    }
  }
}


//show form
export function showArticleForm(payload){
  return(dispatch)=>{
    dispatch({
      type:SHOW_FORM,
      payload:payload
    })
    
  }
}

//////OPEN EDIT VIEW OR MODAL///////
export function openEditArticle(payload){
  return(dispatch, store)=>{
    dispatch({
      type:OPEN_EDIT_ARTICLE,
      payload:{
        index:payload.index,
        article:payload.article
      }
    })
  }
}


//////SAVE EDIT///////
export function saveEdit(payload){
  return(dispatch, store)=>{
    const { articleInput, articleEditIndex } = store().dashboard;
    const news = JSON.parse(localStorage.getItem("news"));
    if(news && news.length > 0){
      news[articleEditIndex] = articleInput;
      localStorage.setItem("news", JSON.stringify(news));
      dispatch({
        type:SAVE_EDIT_ARTICLE,
        payload:news
      })
    }
  }
}

export function toggleApprove(payload, index){
  return(dispatch, store)=>{
    let news = store().dashboard.newsFeed;
    news[index] = payload;
    localStorage.setItem("news", JSON.stringify(news));
    if(news && news.length > 0){
      dispatch({
        type:TOGGLE_APROVE,
        payload:news
      })
      dispatch(functionGetNews());
    };
  }
}


//handle save article

function handleSaveArticle(state, action){
  return update(state, {
    newsFeed:{
      $set:action.payload
    },
      showForm:{
      $set:false
    }
  });
}

function handleOpenEditArticle(state, action){
  return update(state, {
    articleToEdit:{
      $set:action.payload.article
    },
    articleEditIndex:{
      $set:action.payload.index
    },
    articleInput:{
      $set:{}
    }
  });
}

function handleSaveEdit(state, action){
  return update(state, {
    newsFeed:{
      $set:action.payload
    },
    articleToEdit:{
      $set:{}
    },
    articleInput:{
      $set:{}
    },
    articleEditIndex:{
      $set:null
    }
  });
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

//handle show fom
function handleShowForm(state, action){
return update(state,{
  showForm:{
    $set:action.payload
  }
});
}

//handle get article title form input
function handleGetInput(state, action){
  const { key, value } = action.payload;
  return update(state, {
    articleInput:{
      [key]:{
        $set:value
      }
    }
  });
}

function handleToggleApprove(state, action){
  return update(state, {
    newsFeed:{
      $set:action.payload
    }
  });
}
const ACTION_HANDLERS = {
  SELECT_NEWS: handleSelectNews,
  GET_NEWS_FEED: handleGetNewsFeed,
  SAVE_EDIT_ARTICLE: handleSaveEdit,
  OPEN_EDIT_ARTICLE: handleOpenEditArticle,
  SAVE_ARTICLE: handleSaveArticle,
  SHOW_FORM: handleShowForm,
  GET_ARTICLE_INPUT: handleGetInput,
  TOGGLE_APROVE:handleToggleApprove
};

const initialState = {
  selectedArticle: {},
  newsFeed: [],
  articleInput:{},
  showForm: false,
  getInput: {},

};

export default function LoginReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
