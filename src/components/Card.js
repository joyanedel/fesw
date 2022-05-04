import './styles/Card.css';
import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <div className="card-text">
            <div className="card-title-back">
                    {props.subtitle}
                    <div className="card-title">{props.title}</div>
                </div>
                <div className="card-content">
                    <p>{props.text}</p>
                </div>
                { props.link &&
                <div className="card-button">
                <a href={props.link}>{props.button_title}</a>
                </div>
                }
            </div>
            <div className="card-img">
                <img src={props.img} alt=""/>
            </div>
        </div>
    );
}

export default Card;