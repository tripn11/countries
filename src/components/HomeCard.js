import React from 'react';
import numeral from 'numeral';

export default (props) => (
    <div>
        <div>
            <img src={props.details.flags.png} />
        </div>
        <div>
            <h3>{props.details.name.common}</h3>
            <p>Population: {numeral(props.details.population).format('0,0')}</p>
            <p>Region: {props.details.region}</p>
            <p>Capital: {props.details.capital ? props.details.capital[0] : 'not available'}</p>
        </div>
    </div>
)