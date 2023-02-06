import * as api from '../api/index';
import { FETCH_ALL_BOOK, FETCH_BOOK, FETCH_BOOK_BY_SEARCH } from '../constants';

export const fetch_all_book= (navigate)=> async(dispatch)=>{
    try {
        let all_book=await api.getBooks();
        all_book= all_book.data.data;
        // console.log(all_book);
        const action= {type: FETCH_ALL_BOOK, data: all_book};
        dispatch(action);
        navigate("/library");
    } catch (error) {
        console.log(error.message);
    }
}
export const fetch_book= (id,navigate)=> async(dispatch)=>{
    try {
        let book=await api.getBook(id);
        book= book.data.data;
        // console.log(book);
        const action= {type: FETCH_BOOK, data: book};
        dispatch(action);
        navigate("/playbook");
    } catch (error) {
        console.log(error.message);
    }
}
export const fetch_book_by_search= (search)=> async(dispatch)=>{
    try {
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
        // navigate("/library"); 
    } catch (error) {
        console.log(error);
    }
}
