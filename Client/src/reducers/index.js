import { combineReducers } from "redux";
import auth from './auth';
import library from "./library";
import articles from "./articles";
import videos from "./videos";
export default combineReducers({
    auth,
    library,
    articles,
    videos
})