import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeCard from './HomeCard';
import Header from './Header';

export default () => {
    const navigate = useNavigate();
    const[countries, setCountries] = useState([]);
    const[searched, setSearched] = useState('');
    const[region, setRegion] = useState("")

    useEffect(()=>{
        if(region === "") {
            fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data=> {
                    const mySample = [];
                    for(;mySample.length<8; ) {
                        let random = Math.round(Math.random() * data.length);
                        if(!mySample.includes(data[random])) {
                            mySample.push(data[random])
                        }
                    }
                    setCountries([...mySample])
                })
            .catch(error=>console.log(error))
        }else {
            fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then(response => response.json())
            .then(data=> {
                    const mySample = [];
                    for(;mySample.length<8; ) {
                        let random = Math.round(Math.random() * data.length);
                        if(!mySample.includes(data[random])) {
                            mySample.push(data[random])
                        }
                    }
                    setCountries([...mySample])
                })
            .catch(error=>console.log(error))
        }
    }, [region])

    const setCountry = (e) => {
        setSearched(e.target.value);
    }

    const findCountry = () => {
        navigate(`/${searched}`)
    }

    const regionSetter = (e) => {
        setRegion(e.target.value)
    }


    return (
        <div>
            <Header />
            <div>
                <div>
                    <input 
                        placeholder='Search for a country ...'
                        value={searched}
                        onChange={setCountry} 
                    />
                    <span onClick={findCountry}><ion-icon name="search-outline"></ion-icon></span>
                </div>

                <select
                    value={region}
                    onChange={regionSetter}
                >
                    <option value='' disabled selected hidden>Filter by Region</option>
                    <option value='Africa'>Africa</option>
                    <option value='America'>America</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </select>
            </div>


            {countries.map(country=>(<HomeCard key={country.name.official} details={country} />))}
        </div>
    )
}