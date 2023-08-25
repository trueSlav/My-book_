import { Component } from 'react';

import './employees-add-form.css'

class AddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            rating: ''
        }
    }
    
    onSetInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        const {onAdd} = this.props;
        e.preventDefault();
        onAdd(this.state.name, this.state.rating);
    }

    render() {
        const {name, rating} = this.state;

        return(
            <div className="app-add-form">
                <h3>Добавьте новую книгу</h3>
                <form
                    className="add-form d-flex justifu-content-between"
                    onSubmit={this.onSubmit}
                >
                    <input type="text"
                        className="form-control new-post-label f1"
                        placeholder="Название книги" 
                        name="name"
                        value={name}
                        onChange={this.onSetInput}
												required/>
                    <input type="number"
                        className="form-control new-post-label f1"
                        placeholder="Оценка книги?" 
                        name="rating"
                        value={rating}
                        onChange={this.onSetInput}
												required/>
    
                    <button type="submit"
                            className="btn btn-primary"
                            >
                                Добавить</button>
                </form>
            </div>
        );
    }
}
export default AddForm;