import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Location.scss';

const Location = (props) => {
	return (
		<div className="col-md-3 location-item center-content">
			<p>{props.location.name}</p>
			<hr/>
			<p>
				<Link to={`/locations/${props.location._id}`} className="badge badge-info"><i className="fa fa-edit"/> Edit</Link></p>
		</div>
	);
};

Location.propTypes = {
	location: PropTypes.object
};

export default Location;
