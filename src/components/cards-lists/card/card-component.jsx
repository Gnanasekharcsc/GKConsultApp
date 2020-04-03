/* eslint-disable no-template-curly-in-string */
import React from 'react';
export const Card= (props) =>(
    <div className='card-container'>
     <img alt='consultancy' src={`https://robohash.org/${props.consultancy.id}?set=set2&size=180x180`}></img>
     <h1>{props.consultancy.name} </h1>
     <p>{props.consultancy.email} </p>
    </div>
)