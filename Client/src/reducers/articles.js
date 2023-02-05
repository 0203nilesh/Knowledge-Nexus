import { FETCH_ALL_ARTICLES } from "../constants";

export default ((state={articleData: []}, action)=>{
    switch(action.type){
        case FETCH_ALL_ARTICLES:
            console.log(action.data);
            return { ...state, articleData: action.data};
        default:
            return state;
    }
})