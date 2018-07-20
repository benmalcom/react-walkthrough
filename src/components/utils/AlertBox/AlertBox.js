import React from 'react';
import PropTypes from 'prop-types';
import './AlertBox.scss';

const AlertBox =  (props) => {
	return (
		<div className={`alert col-md-4 center-content ${ props.alertStyles.join(' ') || 'alert-info' }`}>
			<p>{props.message}</p>
		</div>
	);
};

AlertBox.propTypes = {
	message: PropTypes.string.isRequired,
	alertStyles: PropTypes.array
};

export default AlertBox;
