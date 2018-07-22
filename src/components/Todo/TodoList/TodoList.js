import React, {Component} from 'react';
import Agent from '../../../utils/agent';
import Todo from './Todo/Todo';
import Loader from '../../utils/Loader/Loader';
import AlertBox from '../../utils/AlertBox/AlertBox';
import {Link} from 'react-router-dom';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: null
        };
    }

    async componentDidMount() {
        try {
            const {data: todos} = await Agent.Todo.getAll();
            this.setState({todos});
        } catch (e) {
            console.log('e ', e.message);
        }

    }

    render() {
        const {todos} = this.state;
        let jsx = null;
        if (!todos) {
            jsx = <Loader message="Getting todos..."/>
        }
        else if (!todos.length) {
            jsx = <AlertBox message={'No Todo added yet'} alertStyles={['alert-warning']}/>
        } else {
            jsx = todos.map(todo => <Todo key={todo._id} todo={todo}/>);
        }
        return (
            <div>
                <div className="row">
                    <Link to="/add-todos" className="btn btn-success btn-sm">Add Todo</Link>
                </div>
                <h1>To Lists</h1>
                <div className="row">
                    {jsx}
                </div>
            </div>
        );
    }
}

export default TodoList;
