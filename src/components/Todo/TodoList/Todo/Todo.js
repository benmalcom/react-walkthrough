import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Todo.scss';

const Todo = (props) => {
    return (
        <div className="col-md-3 location-item center-content">
            <p>{props.todo.name}</p>
            <hr/>
            <p>
                <Link to={`/edit-todos/${props.todo._id}`} className="badge badge-info"><i className="fa fa-edit"/> Edit</Link>
            </p>
            <p>
                <Link to={`/view-todos/${props.todo._id}`} className="badge badge-primary"><i className="fa fa-eye"/> View</Link>
            </p>
        </div>
    );
};

Todo.propTypes = {
    todo: PropTypes.object
};

export default Todo;
