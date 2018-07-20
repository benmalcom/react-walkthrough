import React from 'react';
import PropTypes from 'prop-types';
import './Loader.scss';

const Location =  (props) => {
	return (
		<div className="alert alert-info col-md-4 loader center-content">
			<p><i className="fa fa-circle-o-notch fa-spin"/> {props.message || 'Loading'}</p>
		</div>
	);
};

Location.propTypes = {
	message: PropTypes.string
};

export default Location;
