import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

import './Countries.css'

const Countries = () => {
    
    const [countries, setCountries] = useState([])
    const [visitedCountries,setVisitedCountries] = useState([])
    const [visitedFlag,setVisitedFlag] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    

    const handleVisitededCountries = country => {
        console.log('add this the')
        
        const newVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
       
        
    }
    const visitedCountryFlag = country => {
        const newVisitedFlag = [...visitedFlag,country]
        setVisitedFlag(newVisitedFlag)
        console.log('added flag')
    }

    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <div>
                <h4>visited cointries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}> {country.name.common}</li>)
                    }
                </ul>
            </div>
                    <div className="countries-flag">
                        <h4>Visited Flags: {visitedFlag.length} </h4>
                        {
                            // idx use for error handleing 
                            visitedFlag.map((flag,idx) => <img src = {flag.flags.png} key={idx}></img>)
                        
                        }
                        
                        
                    </div>

            <div className="country-container">
            {
                countries.map(country => <Country 
                key={country.cca3}
                handleVisitededCountries={handleVisitededCountries}
                country={country}
                visitedCountryFlag={visitedCountryFlag}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;