import { END_LOADING, FETCH_ALL_VIDEOS, FETCH_VIDEO, FETCH_VIDEO_BY_SEARCH, START_LOADING } from "../constants";

export default ((state={videosData: [], isLoading: true}, action)=>{
    switch(action.type){
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case FETCH_ALL_VIDEOS:
            console.log(action.data);
            return { ...state, videosData: action.data};
        case FETCH_VIDEO:
            console.log(action?.data);
            return { ...state, videosData: action?.data};
        case FETCH_VIDEO_BY_SEARCH:
            console.log(action?.data);
            return { ...state, videosData: action?.data};
        default:
            return state;
    }
})