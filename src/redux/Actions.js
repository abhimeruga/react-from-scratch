import CONSTANTS from './Constants';
import axios from 'axios';


export const fetchUser = (url) => (dispatch, getState) => {
    return axios.get(url)
    .then(res=>{
        dispatch({type:CONSTANTS.FETCH_SUCCESS})
        dispatch({type:CONSTANTS.USERS_DATA, payload:res.data})
    }).catch(res=>{
        dispatch({type:CONSTANTS.FETCH_FAILURE})
    })  
}