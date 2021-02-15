import { createStore, combineReducers } from 'redux';
import { todoReducer, passReferenceCreateReducer } from './Reducer';

const rootReducer = combineReducers({
    todoReducer: todoReducer,
    passReferenceCreateReducer: passReferenceCreateReducer
})

export const store = createStore(rootReducer);
