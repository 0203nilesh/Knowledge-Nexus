import * as api from '../api/index';
import { FETCH_ALL_ARTICLES } from '../constants';

export const fetch_all_articles= ()=> async(dispatch)=>{
    try {
        const all_articles=await api.getArticles();
        console.log(all_articles);
        const action= {type: FETCH_ALL_ARTICLES, data: all_articles};
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
}