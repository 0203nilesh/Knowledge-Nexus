import * as api from '../api/index';
import { FETCH_ALL_BOOK } from '../constants';

export const fetch_all_book= ()=> async(dispatch)=>{
    try {
        const all_book=await api.getBooks();
        console.log(all_book);
        const action= {type: FETCH_ALL_BOOK, data: all_book};
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
}