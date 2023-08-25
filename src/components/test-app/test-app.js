

import './test-app.css';

export default function IAmTest(props){
    return(
        <div>
            <h1 className="app-test">My name {props.name}, surname - {props.surname}</h1>
            <a href={props.link}>link on my account: </a>
        </div>
    );
}