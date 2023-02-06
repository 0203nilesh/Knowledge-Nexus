import * as api from '../api/index';
import { FETCH_ALL_VIDEOS, FETCH_VIDEO, FETCH_VIDEO_BY_SEARCH } from '../constants';

export const fetch_all_vidoes= (navigate)=> async(dispatch)=>{
    try {
        let all_video=await api.getVideos();
        all_video= all_video.data.data;
        // console.log(all_video);
        const action= {type: FETCH_ALL_VIDEOS, data: all_video};
        dispatch(action);
        navigate("/videos");
    } catch (error) {
        console.log(error.message);
    }
}
export const fetch_video= (id, navigate)=> async(dispatch)=>{
    try {
        let video=await api.getVideo(id);
        video= video.data.data;
        // console.log(video);
        const action= {type: FETCH_VIDEO, data: video};
        dispatch(action);
        navigate("/playvid");
    } catch (error) {
        console.log(error.message);
    }
}


export const fetch_videos_by_search= (search)=> async(dispatch)=>{
    try {
        let all_video=await api.getVideos();
        all_video=all_video.data.data;
        // console.log(all_video);
        let search_videos= all_video.filter((video)=>{
                const temp= video.name.includes(search);
                // console.log(video.name.includes(search))
                if(temp) return video;
        });
        if(search_videos.length!==0){
            all_video=search_videos;
        }else{
            window.alert("Video Not Found!");
        }
        // console.log(all_video);
        const action= {type: FETCH_VIDEO_BY_SEARCH, data: all_video};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}