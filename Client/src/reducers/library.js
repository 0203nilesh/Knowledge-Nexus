import { FETCH_ALL_BOOK } from "../constants";

export default ((state={bookData: []}, action)=>{
    switch(action.type){
        case FETCH_ALL_BOOK:
            console.log(action.data);
            return { ...state, bookData: action.data};
        default:
            return state;
    }
})