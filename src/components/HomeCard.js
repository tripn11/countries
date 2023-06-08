import React from 'react';
import numeral from 'numeral';

export default (props) => (
    <div id="home-card" className={props.mode}>
        <div>
            <img src={props.details.flags.png} />
        </div>
        <div>
            <h3>{props.details.name.common}</h3>
            <p><span>Population:</span>{numeral(props.details.population).format('0,0')}</p>
            <p><span>Region:</span>{props.details.region}</p>
            <p><span>Capital:</span>{props.details.capital ? props.details.capital[0] : 'not available'}</p>
        </div>
    </div>
)