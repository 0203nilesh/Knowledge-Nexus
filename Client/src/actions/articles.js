import * as api from '../api/index';
import { FETCH_ALL_ARTICLES, FETCH_ARTICLE , FETCH_ARTICLE_BY_SEARCH} from '../constants';

export const fetch_all_articles= (navigate)=> async(dispatch)=>{
    try {
        let all_articles=await api.getArticles();
        all_articles= all_articles.data.data;
        // console.log(all_articles);
        const action= {type: FETCH_ALL_ARTICLES, data: all_articles};
        dispatch(action);
        navigate("/articles");
    } catch (error) {
        console.log(error.message);
    }
}
export const fetch_article= (id, navigate)=> async(dispatch)=>{
    try {
        let article=await api.getArticle(id);
        article= article.data.data;
        // console.log(article);
        const action= {type: FETCH_ARTICLE, data: article};
        dispatch(action);
        navigate("/playarticle");
    } catch (error) {
        console.log(error.message);
    }
}

export const fetch_articles_by_search= (search)=> async(dispatch)=>{
    try {
        let all_articles=await api.getArticles();
        all_articles=all_articles.data.data;
        // console.log(all_articles);
        let search_articles= all_articles.filter((article)=>{
                const temp= article.name.includes(`${search}`);
                // console.log(article.name.includes(search));
                if(temp) return article;
        });
        if(search_articles.length!==0){
            all_articles=search_articles;
        }else{
            window.alert("Article Not Found!");
        }
        // console.log(all_articles);
        const action= {type: FETCH_ARTICLE_BY_SEARCH, data: all_articles};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}