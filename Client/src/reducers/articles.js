import { END_LOADING, FETCH_ALL_ARTICLES, FETCH_ARTICLE, FETCH_ARTICLE_BY_SEARCH, START_LOADING } from "../constants";

export default ((state={articleData: [], isLoading: true}, action)=>{
    switch(action.type){
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case FETCH_ALL_ARTICLES:
            console.log(action.data);
            return { ...state, articleData: action.data};
        case FETCH_ARTICLE:
            console.log(action.data);
            return { ...state, articleData: action.data};
        case FETCH_ARTICLE_BY_SEARCH:
            console.log(action.data);
            return { ...state, articleData: action.data};
        default:
            return state;
    }
})