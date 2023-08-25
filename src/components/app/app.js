import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search-panel/app-search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emploees-list/employees-list';
import AddForm from '../employees-add-form/employees-add-form';

import './app.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name:"Мир как воля и представление", rating: 1000, increase: false, like: true, id:1},
                {name:"Апология Сократа. Диалоги", rating: 199, increase: false, like: false, id:2},
                {name:"Ведьмак: Последнее желание", rating: 1000, increase: false, like: false, id:3}
            ],
						term: '',
						filter: 'all'
        }
        this.maxIndex = 3;
    };

    deleteItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)
            }
        });
    };

    addItem = (name, rating) => {
        const newItem = {
            name,
            rating,
            increase: false,
						like: false,
            id: ++this.maxIndex
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return{
                data: newArr
            }
        })
    };

		onToggleProp = (id, prop) => {
			this.setState(({data}) => ({
				data: data.map(item => {
					if(item.id === id) {
						return {...item, [prop]: !item[prop]};
					}
					return item;
				})
			}))
		};

		searchEmp = (items, term) => {
			if(term.length === 0){
				return items;
			}

			return items.filter(item => {
				return item.name.indexOf(term) > -1;
			});
		};

		onUpdateSearch = (term) => {
			this.setState({term}); // term: term
		};

		filterPost = (items, filter) => {
			switch (filter) {
				case 'like':
					return items.filter(item => item.like);
				case 'more1000':
					return items.filter(item => item.rating > 1000);		
				default:
					return items;
			}
		};

		onFilterSelect = (filter) => {
			this.setState({filter});
		};

    render() {
        let {data, term, filter} = this.state;
				const all = data.length;
				const increased = data.filter(item => item.increase).length;
				const liked = data.filter(item => item.like).length;
				const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo all={all} increased={increased} liked={liked}/>
                <div className="app-search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onFilterSelect={this.onFilterSelect} filter={filter}/>
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete = {this.deleteItem}
                    onToggleProp = {this.onToggleProp}
                />
                <AddForm onAdd={this.addItem} />
            </div>
        );
    }
}