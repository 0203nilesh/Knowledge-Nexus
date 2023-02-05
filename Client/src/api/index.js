import axios from "axios";

const API= axios.create({baseURL: "http://localhost:5000"});

export const login=async (authData)=>{ 
    const data=await API.post('/auth/login', authData);
    // console.log(data);
    return {data};
};

export const register= async(authData)=> { 
    const data=await API.post("/auth/register", authData);
    // console.log(data);
    return {data};
 };

export const getBooks= async()=>{
    const data= await API.get("/books/get");
    console.log(data);
    return {data};
}

export const getArticles= async()=>{
    const data= await API.get("/articles/get");
    console.log(data);
    return {data};
}

export const getVideos= async()=>{
    const data= await API.get("/videos/get");
    console.log(data);
    return {data};
}
export const getVideo= async(id)=>{
    const data= await API.get(`/videos/get/${id}`);
    console.log(data);
    return {data};
}
