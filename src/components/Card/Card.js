import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'

const Card = ({source, title, desc}) => {
    return (
    <div className="card" >
        <img className="card-img-top" src={source} alt=""/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
        </div>
    </div>
    )
}

export default Card