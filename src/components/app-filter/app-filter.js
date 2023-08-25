

import './app-filter.css'

export default function AppFilter(props){

	const buttonsData = [
		{name: 'all', label: 'Все книги'},
		{name: 'like', label: 'Отметка Отличия'},
		{name: 'more1000', label: 'Рейтинг больше 1000'},
	];

	const buttons = buttonsData.map(({name, label}) => {
		const active = props.filter === name;
		const clazz = active ? 'btn-primary' : 'btn-outline-dark';

		return (
			<button 
				type="button" 
				className={`btn ${clazz}`}
				key={name}
				onClick={() => props.onFilterSelect(name)}>
				{label}
			</button>
		);
	});

	return(
		<div className="btn-group app-filter">
			{buttons}
		</div>
	);
}