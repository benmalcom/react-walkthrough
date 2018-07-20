import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import { Route, Switch } from 'react-router-dom';
import LocationList from '../Location/LocationList/LocationList';
import AddLocation from '../Location/AddLocation/AddLocation';


export default () => (
	<div className="container">
		<Switch>
			<Route exact={true} path={'/'} component={LocationList}/>
			<Route path={'/add-location'} component={AddLocation}/>
		</Switch>
	</div>);
