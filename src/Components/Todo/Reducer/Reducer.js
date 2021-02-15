import CONSTANTS from '../../Constants/TodoConstants'
export const todoReducer = (state= [], action) => {
    switch(action.type) {
        case CONSTANTS.ADD_TODO:
            return [...state, action.payload]
        case CONSTANTS.DELETE_TODO:
            return (
                state.filter((item)=>{
                    return item.title !== action.payload
                })
            );
        case CONSTANTS.EDIT_TODO:
            const editItem = action.payload;
            let newTodoList = [...state];
            let indextoChangeItem = -999;
            state.filter((item, index)=>{
                if(item.title === editItem.title) {
                    indextoChangeItem = index;
                }
            });
            newTodoList.splice(indextoChangeItem, 1, editItem.formData);
            console.log(state, indextoChangeItem, newTodoList);

            return (newTodoList);
        default :
            return state;
    }
}

export const passReferenceCreateReducer = (state={}, action) => {
    switch(action.type) {
        case CONSTANTS.EDITABLE :
            return {flag: action.payload.flag, data: action.payload.data }
        default:
            return state;
    }
}