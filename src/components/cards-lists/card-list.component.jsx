import React from 'react';
import '../card-list-style.css';
import '../cards-lists/card/card-component'
import { Card } from '../cards-lists/card/card-component';

export const CardList = props =>(
    <div className ='card-list'>
        {props.consultancies.map(consultancy =>(
        <Card key ={consultancy.id} consultancy={consultancy}/>
        ))}
        </div>
        );