import CONSTANTS from './Constants';
import {combineReducers} from 'redux';
import stateData from './statedata'

const todoReducer = (state = [], action) => {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case CONSTANTS.ADD_TODO :
            return [...state, action.payload];
        case CONSTANTS.DELETE_TODO:
            
            return state.filter((item)=>{
                console.log(item.title,  action.payload.title)
                return (item.title !== action.payload.title)})
        default:
            return state;
    }
}

const clickCounter = (state = 0, action) => {
    switch(action.type) {
        case CONSTANTS.CLICK_INCREMENT_COUNDER:
            return state + 1;
        case CONSTANTS.CLICK_DECREMENT_COUNDER:
            return state - 1;
        default:
            return state
    }
}
const HoverCounter = (state = 0, action) => {
    switch(action.type) {
        case CONSTANTS.HOVER_INCREMENT_COUNDER:
            return state + 1;
        case CONSTANTS.HOVER_DECREMENT_COUNDER:
            return state - 1;
        default:
            return state
    }
}

export const fetchUserData = (state=[], action) => {
    switch(action.type) {
        case CONSTANTS.USERS_DATA:
            return action.payload;
        default:
            return state;
    }
}

export const fetchDataFlag = (state=false, action) => {
    switch(action.type) {
        case CONSTANTS.FETCH_SUCCESS:
            return false;
        case CONSTANTS.FETCH_FAILURE:
            return true;
        default:
            return state;
    }
}

const fetchDataReducer = combineReducers({
    fetchDataFlag: fetchDataFlag,
    fetchUserData: fetchUserData

})

const counterReducers = combineReducers({
    clickCounter: clickCounter,
    HoverCounter: HoverCounter

})
export default combineReducers({
    todoReducer: todoReducer,
    counterReducers: counterReducers,
    fetchDataReducer: fetchDataReducer
})