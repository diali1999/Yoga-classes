import {React} from 'react';
import './TextField.css';

export default function RadioField(props) {
    return (
        <div className = 'field'>
            <h2>{props.label}</h2>
            {props.options.map((option, index) => (
                <div className="radio">
                <label>
                    <input
                        type="radio"
                        value={option}
                        id={props.id}
                        key={index}
                    />
                    {option}
                </label>             
                </div>   
            ))}
        </div>
    )
}