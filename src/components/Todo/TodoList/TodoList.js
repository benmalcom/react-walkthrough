import React, {Component} from 'react';
import Agent from '../../../utils/agent';
import Location from './Todo/Location';
import Loader from '../../utils/Loader/Loader';
import AlertBox from '../../utils/AlertBox/AlertBox';
import {Link} from 'react-router-dom';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: null
        };
    }

    async componentDidMount() {
        try {
            const {data: locations} = await Agent.Location.getAll();
            this.setState({locations});
        } catch (e) {
            console.log('e ', e.message);
        }

    }

    render() {
        const {locations} = this.state;
        let jsx = null;
        if (!locations) {
            jsx = <Loader message="Getting locations..."/>
        }
        else if (!locations.length) {
            jsx = <AlertBox message={'No locations available'} alertStyles={['alert-warning']}/>
        } else {
            jsx = locations.map(location => <Location key={location._id} location={location}/>);
        }
        return (
            <div>
                <div className="row">
                    <Link to="/add-location" className="btn btn-success btn-sm">Add location</Link>
                </div>
                <div className="row">
                    {jsx}
                </div>
            </div>
        );
    }

}

export default TodoList;
