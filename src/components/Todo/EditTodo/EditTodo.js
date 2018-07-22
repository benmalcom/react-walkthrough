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
            name: '',
            title: '',
            description: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    async componentDidMount() {
        const {match: {params}} = this.props;
        try {
            this.setState({loading: true});
            const {data: todo} = await Agent.Todo.get(params.id);
            this.setState({
                error: false,
                loading: false,
                name: todo.name,
                title: todo.title,
                description: todo.description
            });
        } catch (e) {
            this.setState({error: true, loading: false});
            console.log('e ', e);
        }
    }

    async onSubmit(evt) {
        evt.preventDefault();
        const {match: {params}} = this.props;
        const {name, title, description} = this.state;
        if (location) {
            this.setState({loading: true, error: false});
            try {
                await Agent.Todo.update(params.id, {name, title, description});
                this.setState({error: false});
                this.props.history.push('/todos');
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
        const {error, loading, name, title, description} = this.state;
        console.log('description : ', description);
        if (loading) {
            return <Loader message="Getting Todo..."/>
        }
        return (
            <div>
                {loading && <Loader message="Saving location data..."/>}
                {error && <AlertBox message="Oops! There's was a problem!" alertStyles={['alert-danger']}/>}
                <form className="col-md-4 p-5 pl-0 pt-2" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>name</label>
                        <input type="text" className="form-control" name="name" onChange={this.onInputChange}
                               placeholder="Enter name" value={name}/>
                    </div>
                    <div className="form-group">
                        <label>title</label>
                        <input type="text" className="form-control" name="title" onChange={this.onInputChange}
                               placeholder="Enter title" value={title}/>
                    </div>
                    <div className="form-group">
                        <label>description</label>
                        <textarea type="text" className="form-control" defaultValue={description} name="description"
                                  onChange={this.onInputChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

}

export default EditTodo;
