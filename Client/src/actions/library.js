import * as api from '../api/index';
import { END_LOADING, FETCH_ALL_BOOK, FETCH_BOOK, FETCH_BOOK_BY_SEARCH, START_LOADING } from '../constants';

export const fetch_all_book= ()=> async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        let all_book=await api.getBooks();
        all_book= all_book.data.data;
        // console.log(all_book);
        const action= {type: FETCH_ALL_BOOK, data: all_book};
        dispatch(action);
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error.message);
    }
}
export const fetch_book= (id)=> async(dispatch)=>{
    try {
        dispatch({type:START_LOADING});
        let book=await api.getBook(id);
        book= book.data.data;
        // console.log(book);
        const action= {type: FETCH_BOOK, data: book};
        dispatch(action);
        dispatch({type:END_LOADING});
    } catch (error) {
        console.log(error.message);
    }
}
export const fetch_book_by_search= (search)=> async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        let all_book=await api.getBooks();
        all_book=all_book.data.data;
        // console.log(all_book);
        let search_book= all_book.filter((book)=>{
                const temp= book.name.includes(search);
                // console.log(book.name.includes(search))
                if(temp) return book;
        });
        if(search_book.length!==0){
            all_book=search_book;
        }else{
            window.alert("Book Not Found!");
        }
        // console.log(all_book);
        const action= {type: FETCH_BOOK_BY_SEARCH, data: all_book};
        dispatch(action);
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}
