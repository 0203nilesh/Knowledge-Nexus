import { FETCH_ALL_ARTICLES, FETCH_ARTICLE, FETCH_ARTICLE_BY_SEARCH } from "../constants";

export default ((state={articleData: []}, action)=>{
    switch(action.type){
        case FETCH_ALL_ARTICLES:
            localStorage.setItem("articleData", JSON.stringify(action?.data));
            console.log(action.data);
            return { ...state, articleData: action.data};
            case FETCH_ARTICLE:
            localStorage.setItem("articleData", JSON.stringify(action.data));
            console.log(action.data);
            return { ...state, articleData: action.data};
            case FETCH_ARTICLE_BY_SEARCH:
            console.log(action.data);
            return { ...state, articleData: action.data};
        default:
            return state;
    }
})