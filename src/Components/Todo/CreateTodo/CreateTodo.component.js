import React, { useState, useRef, useEffect } from 'react';
import { addTodo, editableFlag, editTodo } from '../Reducer/Actions'
import './CreateTodo.styles.css';
import { connect } from 'react-redux'
import ModalComponent from '../ReusableComponent/Modal.component'

function CreateTodo( props ) {
    // console.log(props)
    const initialStateTodo = {title:'', status:'Active', description:'', date:''};
    const [formData, setFormData] = useState(initialStateTodo);
    const [editTodoItem, setEditTodoItem] = useState({title:'', edit:false});
    const [showModal, setModalFlag] = useState({showModalFlag: false, header:'Create Todo', body:'Empty Title/Description/Date/Status', changeValue:'OK'});
    const inputRef = useRef();

    const createTodo = (e) => {
        const {title, status, description} = formData;
        if(editTodoItem.edit) {
            setEditTodoItem({title:'', edit:false});
            props.editTodoFromList({title:editTodoItem.title, formData:formData});
            setFormData(initialStateTodo);
        } else {
            if(title && status && description) {
                formData.date = new Date().toLocaleString().split(",")[0];            
                props.createTodoItem(formData);
                setFormData(initialStateTodo);
            } else {
                setModalFlag({
                    ...showModal, showModalFlag:true
                })
            }
        }        
        e.preventDefault();
    }

    useEffect(()=>{
        if(props.editable && props.editable.flag) {
            inputRef.current.focus();
            setFormData({
                title: props.editable.data.title,
                description : props.editable.data.description,
                status: props.editable.data.status,
                date: props.editable.data.date,
            })
            setEditTodoItem({title:props.editable.data.title, edit:true});
            props.setEditableFlag({flag:false, data:{}})
        }
    },[props.editable.flag])

    const changeFormState = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    }

    return (
        <div className="jumbotron">
            <h3>Create todo</h3>

            <form onSubmit={createTodo}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input ref={inputRef} type="text" name="title" value={formData.title} onChange={changeFormState} className="form-control" id="exampleFormControlInput1" placeholder="Title" />
            </div>          

            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Status</label>
                <select className="form-select form-select-sm" name="status" value={formData.status} onChange={changeFormState}
                                                                        style={{width:'100%', borderRadius:'4px',
                                                                        border: '1px solid lightgrey', padding: '.25em .5em', 
                                                                        fontSize:'.875em' }}>
                    <option value="Active">Active</option>
                    <option value="InProgress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea name="description" value={formData.description} onChange={changeFormState}
                                       className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div>
                <button className="btn btn-outline-secondary" type="submit" >Create ToDo</button>
            </div>
            </form>

            {showModal.showModalFlag && <ModalComponent data={showModal} 
                        closeButton={()=>{setModalFlag({...showModal, showModalFlag:false})}}/>}           

        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        list: state.todoReducer,
        editable: state.passReferenceCreateReducer
    })
}

const mapStateToDispatch = (dispatch) => {
    return ({
        createTodoItem(data) {
            dispatch(addTodo(data))
        },
        setEditableFlag(data) {
            dispatch(editableFlag(data))
        },
        editTodoFromList (data) {
            dispatch(editTodo(data))
        }
    })
}

export default connect(mapStateToProps, mapStateToDispatch)(CreateTodo)
