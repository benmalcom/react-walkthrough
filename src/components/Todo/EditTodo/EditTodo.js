import React, {Component} from 'react';
import Agent from '../../../utils/agent';
import AlertBox from '../../utils/AlertBox/AlertBox';
import Loader from '../../utils/Loader/Loader';

class EditTodo extends Component {
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

    async componentDidMount() {
        const {match: {params}} = this.props;
        try {
            const { data:location} = await Agent.Location.get(params.id);
            console.log("location : ", location);
            this.setState({error: false, name: location.name});
        } catch (e) {
            this.setState({error: true, loading: false});
            console.log('e ', e);
        }
    }

    async onSubmit(evt) {
        evt.preventDefault();
        const {match: {params}} = this.props;
        const {name} = this.state;
        if (location) {
            this.setState({loading: true, error: false});
            try {
                await Agent.Location.update(params.id, {name});
                this.setState({error: false});
                this.props.history.push('/');
            } catch (e) {
                this.setState({error: true, loading: false});
                console.log('e ', e);
            }
        }

    }

    onInputChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const {error, loading, name} = this.state;
        if (!location) {
            return <Loader message="Getting location..."/>
        }
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

export default EditTodo;
