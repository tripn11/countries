import React, { useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import numeral from 'numeral';
import Header from './Header';

export default () => {
    const { country } = useParams();
    const[details, setDetails] = useState('loading')
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${country}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                return response.json()
            })   
            .then(data => {
                setDetails(data[0])
            })
            .catch(()=>{
                setDetails(null)
            })
    }, [])

    const goHome = () => {
        navigate('/');
    }

    return (
        <div>
            <Header />
            <button onClick={goHome}>Back</button>
            {details=== null && <div>Could not find this country</div>}
            {details ==='loading' && <div>Loading...</div>}
            {details !== null && details !== 'loading' && 
                <div>
                    <div>
                        <img src={details.flags.png} />
                    </div>

                    <div>
                        <h3>{details.name.common}</h3>
                        <div>
                            <p>Native Name: {details.name.nativeName[Object.keys(details.name.nativeName)[0]].common}</p>
                            <p>Population: {numeral(details.population).format('0,0')}</p>
                            <p>Region: {details.region}</p>
                            <p>Sub Region: {details.subregion}</p>
                            <p>Capital: {details.capital[0]}</p>
                        </div>
                        <div>
                            <p>Top Level Domain: {details.tld[0]}</p>
                            <p>Currencies:{Object.keys(details.currencies).map(key=>details.currencies[key].name).join(",")}</p>
                            <p>Languages:{Object.keys(details.languages).map(key=>details.languages[key]).join(",")}</p>
                        </div>
                    </div>
                </div>}
        </div>
    )
}