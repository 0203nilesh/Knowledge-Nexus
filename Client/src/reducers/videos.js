import { FETCH_ALL_VIDEOS, FETCH_VIDEO, FETCH_VIDEO_BY_SEARCH } from "../constants";

export default ((state={vidoesData: []}, action)=>{
    switch(action.type){
        case FETCH_ALL_VIDEOS:
            console.log(action.data);
            return { ...state, vidoesData: action.data};
        case FETCH_VIDEO:
            console.log(action?.data);
            return { ...state, vidoesData: action?.data};
        case FETCH_VIDEO_BY_SEARCH:
            console.log(action?.data);
            return { ...state, vidoesData: action?.data};
        default:
            return state;
    }
})