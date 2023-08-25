
import './app-info.css';

export default function AppInfo({all, increased, liked}){

	return (        
        <div className="app-info">
            <h1>Список литературы {all} </h1>
            <h2>Прочитанные книги: {increased}</h2>
            <h2>Отмеченные книги: {liked}</h2>
        </div>
    );
}