import * as api from '../api/index';
import {LOGIN, REGISTER, LOGOUT} from '../constants/index';

export const login= (data, navigate)=> async(dispatch)=>{
    try {
        const userData=await api.login(data);
        // console.log(userData);
        dispatch({type: LOGIN, data: userData});
        navigate("/home");
        window.alert("Successfully logged in");
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
        navigate("/home");
        window.alert("Registration successful");
    } catch (error) {
        window.alert(error.message);
        console.log(error.message);
    }
}
export const logout= (navigate)=> async(dispatch)=>{
    try {
        dispatch({type: LOGOUT, data: null});
        navigate("/home");
        window.alert("logout successful");
    } catch (error) {
        window.alert(error.message);
        console.log(error.message);
    }
}