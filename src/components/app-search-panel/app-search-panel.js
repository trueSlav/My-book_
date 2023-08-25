import { Component } from 'react';

import './app-search-panel.css';

export default class SearchPanel extends Component {
	constructor(props){
		super(props);
		this.state = {
			term: ''
		}
	}

	onUpdateSearch = (e) => {
		const term = e.target.value;
		this.setState({term});
		this.props.onUpdateSearch(term);
	}

	render(){
		return (
			<div className="input-group flex-nowrap">
				{/* <span class="input-group-text" id="addon-wrapping"></span> */}
				<input 
					type="text" 
					className="form-control search-input" 
					placeholder="Найти книгу" 
					aria-label="Найти книгу" 
					aria-describedby="addon-wrapping"
					value={this.state.term}
					onChange={this.onUpdateSearch}/>
			</div>
		);
	}
}