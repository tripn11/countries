import React, { useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import numeral from 'numeral';
import Header from './Header';

export default () => {
    const { country } = useParams();
    const[details, setDetails] = useState('loading')
    const[borders, setBorders] =  useState([]);
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
                data[0].borders.map((each)=>{
                    fetch(`https://restcountries.com/v3.1/alpha/${each}`)
                        .then(response => {
                            return response.json()
                        })
                        .then(data => {
                            setBorders((prevState) => [...prevState,data[0].name.common])
                        })
                        .catch((error)=> {
                            console.log(error)
                        })
                })
            })
            .catch(()=>{
                setDetails(null)
            })
    }, [])

    const goHome = () => {
        navigate('/');
    }

    return (
        <div id='country'>
            <Header />
            <button onClick={goHome}><ion-icon name="arrow-back-outline"></ion-icon><span>Back</span></button>
            {details=== null && <div className='message'>Could not find this country</div>}
            {details ==='loading' && <div className='message'>Loading...</div>}
            {details !== null && details !== 'loading' && 
                <div id='country-details'>
                    <div>
                        <img src={details.flags.png} />
                    </div>

                    <div>
                        <h3>{details.name.common}</h3>
                        <div>
                            <p><span>Native Name:</span>{details.name.nativeName[Object.keys(details.name.nativeName)[0]].common}</p>
                            <p><span>Population:</span>{numeral(details.population).format('0,0')}</p>
                            <p><span>Region:</span>{details.region}</p>
                            <p><span>Sub Region:</span>{details.subregion}</p>
                            <p><span>Capital:</span>{details.capital[0]}</p>
                        </div>
                        <div>
                            <p><span>Top Level Domain:</span>{details.tld[0]}</p>
                            <p><span>Currencies:</span>{Object.keys(details.currencies).map(key=>details.currencies[key].name).join(",")}</p>
                            <p><span>Languages:</span>{Object.keys(details.languages).map(key=>details.languages[key]).join(",")}</p>
                        </div>
                        <div>
                            <p><span>Border Countries:</span>{borders.map(each => <span key={each} className='border'>{each}</span>)}</p>
                        </div>
                    </div>
                </div>}
        </div>
    )
}