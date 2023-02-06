import { FETCH_ALL_BOOK, FETCH_BOOK, FETCH_BOOK_BY_SEARCH } from "../constants";

export default ((state={bookData: []}, action)=>{
    switch(action.type){
        case FETCH_ALL_BOOK:
            console.log(action.data);
            return { ...state, bookData: action.data};
        case FETCH_BOOK:
            console.log(action.data);
            return { ...state, bookData: action.data};
        case FETCH_BOOK_BY_SEARCH:
            console.log(action.data);
            return { ...state, bookData: action.data};
        default:
            return state;
    }
})