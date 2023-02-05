import * as api from '../api/index';
import { FETCH_ALL_VIDEOS, FETCH_VIDEO } from '../constants';

export const fetch_all_vidoes= ()=> async(dispatch)=>{
    try {
        const all_video=await api.getVideos();
        console.log(all_video);
        const action= {type: FETCH_ALL_VIDEOS, data: all_video};
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
}
export const fetch_video= (id)=> async(dispatch)=>{
    try {
        const video=await api.getVideo(id);
        console.log(video);
        const action= {type: FETCH_VIDEO, data: video};
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
}