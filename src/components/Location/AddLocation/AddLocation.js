import React, { Component } from 'react';
import Agent from '../../../utils/agent';
import AlertBox from '../../utils/AlertBox/AlertBox';
import Loader from '../../utils/Loader/Loader';
class AddLocation extends Component{
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			loading: false,
			name: ''
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	async onSubmit(evt){
		evt.preventDefault();
		const { name } = this.state;
		if (name) {
			this.setState({loading: true, error: false});
			try{
				await Agent.Location.create({name});
				this.setState({error: false});
				this.props.history.push('/');
			} catch (e) {
				this.setState({error: true, loading: false});
				console.log('e ', e);
			}
		}

	}

	onInputChange(e){
		this.setState({[e.target.name]: e.target.value})
	}

	render() {
		const { name, error, loading } = this.state;
		return (
			<div>
				{loading && <Loader message="Saving location data..."/>}
				{error && <AlertBox message="Oops! There's was a problem!" alertStyles={['alert-danger']}/>}
				<form className="col-md-4 p-5 pl-0 pt-2" onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Location name</label>
						<input type="text" className="form-control" name="name" onChange={this.onInputChange}
							   placeholder="Enter name" value={name}/>
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
							else.
						</small>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>

		);
	}

}

export default AddLocation;
