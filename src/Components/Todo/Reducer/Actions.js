import TODOLIST from '../../Constants/TodoConstants';

export const addTodo = ({title, status, description, date}) => {
    return ({
        type: TODOLIST.ADD_TODO,
        payload: {
            title,
            status,
            description,
            date
        }
    })
}

export const deleteTodo = (title) => {
    return ({
        type: TODOLIST.DELETE_TODO,
        payload: title
    })
}

export const editTodo = ({title, formData}) => {
    return ({
        type: TODOLIST.EDIT_TODO,
        payload: {
            title:title,
            formData: formData            
        }
    })
}

export const editableFlag = ({flag, data}) => {
    return({
        type:TODOLIST.EDITABLE,
        payload: {
            flag,
            data
        }
    })
}