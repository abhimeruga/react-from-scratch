import React, { useState } from 'react'
import './List.styles.css';
import { FaEdit, FaTrashAlt} from 'react-icons/fa';
import { connect } from 'react-redux';
import { deleteTodo, editTodo, editableFlag  } from '../Reducer/Actions';

function List(props) {
    const editTodoListItem = (item) => {
        props.setEditFlag({flag:true,data:item});
    }

    const deleteTodoListItem = (title) => {
        props.deleteTodo(title);
    }

    return (
        <div className="jumbotron">
            <h3>Todo Items</h3>
            {
                props.list.length === 0 ? <h5>No Items</h5>:
                <ul className="list-group">
                {
                    props.list.map((item)=>{
                        return (
                                <li className="list-group-item "> 
                                    <div className="d-flex  w-100 justify-content-between">
                                    <div className="d-flex  todo-title-witdh " style={{width:'70%', justifyContent:'space-between'}}>
                                        <h5 className="mb-1" title={item.title} >{item.title.length < 12 ? item.title : item.title.slice(0,13)+'...'}</h5>
                                        <h6> 
                                            {item.status === 'Active' ? 
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" 
                                                        style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div> : item.status === 'InProgress' ? 
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" 
                                                        style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>:
                                                    <div class="progress">
                                                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" 
                                                            style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>}
                                            {item.status} 
                                        </h6>
                                        <small className="text-muted">{item.date}</small>
                                    </div>
                                    <div className="d-flex  todo-action-witdh" style={{width:'20%' , justifyContent:'space-around'}}>
                                        <button onClick={()=>{editTodoListItem(item)}} className="btn btn-warning"> <FaEdit/> </button>
                                        <button onClick={()=>{deleteTodoListItem(item.title)}} className="btn btn-danger"> < FaTrashAlt /> </button>
                                    </div>
                                    </div>   
                                </li>
                                )                    
                    })
                }
                </ul>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        list: state.todoReducer,
    }) 
}

const mapStateToDispatch = (dispatch) => {
    return({
        editTodo(data) {
            dispatch(editTodo(data));
        },
        deleteTodo(data) {
            dispatch(deleteTodo(data));
        },
        setEditFlag(flagData){
            dispatch(editableFlag(flagData))
        }
    }) 
}

export default connect(mapStateToProps,mapStateToDispatch)(List);
