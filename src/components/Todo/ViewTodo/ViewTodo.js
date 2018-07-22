import React, {Component} from 'react';
import Agent from '../../../utils/agent';
import Loader from '../../utils/Loader/Loader';
import {Link} from 'react-router-dom';

class ViewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loading: false,
            todo: null
        };
    }

    async componentDidMount() {
        const {match: {params}} = this.props;
        try {
            this.setState({loading: true});
            const {data: todo} = await Agent.Todo.get(params.id);
            this.setState({
                error: false,
                loading: false,
                todo: todo,
            });
        } catch (e) {
            this.setState({error: true, loading: false});
            console.log('e ', e);
        }
    }

    render() {
        const {todo} = this.state;
        if (!todo) {
            return <Loader message="Getting Todo..."/>
        }
        return (
            <div>
                <Link to={`/todos`} className="badge badge-primary"><i
                    className="fa fa-eye"/> List Todos</Link>
                <Link to={`/todos/${todo._id}`} className="badge badge-info"><i
                    className="fa fa-pencil"/> Edit Todo</Link>
                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{todo.name}</td>
                    </tr>
                    <tr>
                        <td>Tile</td>
                        <td>{todo.title}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{todo.description}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ViewTodo;
