import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import { Route, Switch } from 'react-router-dom';
import LocationList from '../Location/LocationList/LocationList';
import AddLocation from '../Location/AddLocation/AddLocation';
import EditLocation from '../Location/EditLocation/EditLocation';
import TodoList from '../Todo/TodoList/TodoList';


export default () => (
	<div className="container">
		<Switch>
			<Route exact={true} path={'/'} component={LocationList}/>
			<Route exact={true} path={'/todos'} component={TodoList}/>
			<Route path={'/add-location'} component={AddLocation}/>
			<Route path={'/edit-location/:id'} component={EditLocation}/>
		</Switch>
	</div>);
