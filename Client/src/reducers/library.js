import { END_LOADING, FETCH_ALL_BOOK, FETCH_BOOK, FETCH_BOOK_BY_SEARCH, START_LOADING } from "../constants";

export default ((state={booksData: [], isLoading: true}, action)=>{
    switch(action.type){
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case FETCH_ALL_BOOK:
            console.log(action.data);
            return { ...state, booksData: action.data};
        case FETCH_BOOK:
            console.log(action.data);
            return { ...state, booksData: action.data};
        case FETCH_BOOK_BY_SEARCH:
            console.log(action.data);
            return { ...state, booksData: action.data};
        default:
            return state;
    }
})