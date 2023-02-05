import * as api from '../api/index';
import {LOGIN, REGISTER} from '../constants/index';

export const login= (data, navigate)=> async(dispatch)=>{
    try {
        const userData=await api.login(data);
        // console.log(userData);
        dispatch({type: LOGIN, data: userData});
        window.alert("Successfully logged in");
        setTimeout(()=>{
            navigate("/home");
        },1000)
    } catch (error) {
        window.alert(error.message);
        console.log(error.message);
    }
}

export const register= (data, navigate)=> async(dispatch)=>{
    try {
        const userData=await api.register(data);
        // console.log(userData);
        dispatch({type: REGISTER, data: userData});
        window.alert("Registration successful");
        setTimeout(()=>{
            navigate("/home");
        },1000)
    } catch (error) {
        window.alert(error.message);
        console.log(error.message);
    }
}