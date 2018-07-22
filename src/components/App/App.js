import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import {Route, Switch} from 'react-router-dom';
import LocationList from '../Location/LocationList/LocationList';
import AddLocation from '../Location/AddLocation/AddLocation';
import EditLocation from '../Location/EditLocation/EditLocation';
import TodoList from '../Todo/TodoList/TodoList';
import AddTodo from '../Todo/AddTodo/AddTodo';
import EditTodo from '../Todo/EditTodo/EditTodo';
import ViewTodo from '../Todo/ViewTodo/ViewTodo';


export default () => (
    <div className="container">
        <Switch>
            <Route exact={true} path={'/'} component={LocationList}/>
            <Route path={'/todos'} component={TodoList}/>
            <Route path={'/add-todos'} component={AddTodo}/>
            <Route path={'/edit-todos/:id'} component={EditTodo}/>
            <Route path={'/view-todos/:id'} component={ViewTodo}/>
            <Route path={'/add-location'} component={AddLocation}/>
            <Route path={'/edit-location/:id'} component={EditLocation}/>
        </Switch>
    </div>);
