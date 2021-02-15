import React from 'react'
import ReactDOM from 'react-dom';
// import store from './redux/store'
import {Container, Col, Row, } from 'react-bootstrap';
import List from './Components/Todo/List/List.component'
import CreateTodo from './Components/Todo/CreateTodo/CreateTodo.component';
import { Provider } from 'react-redux';
import { store } from './Components/Todo/Reducer/Store' 

function App() {
    return (
        <div>
            <Provider store = {store}>
            <div className="" style={{
                    textAlign: 'center',
                    padding: '20px',
                    background: 'lightgrey',
                    margin: '1% 6%',
                    borderRadius: '5px'
            }}>
                <><h3>Todo App</h3></>
            </div>
            <Container>
                <Row>
                    <Col>
                        <List/>
                    </Col>
                    <Col>
                        <CreateTodo/>
                    </Col>
                </Row>
            </Container>
            </Provider>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))

