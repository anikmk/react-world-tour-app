

import { useState } from 'react';
import './country.css'
const Country = ({country,handleVisitededCountries,visitedCountryFlag}) => {
    const  {name,flags,population,area,cca3} = country;
    const [visited,setVisited] = useState(false)
   
    const handleVisited = () => {
            setVisited(!visited)
    }
   
   

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 className={`${visited && 'text-color'}`}>name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>code: {cca3}</p>
            <button onClick={()=>{handleVisitededCountries(country)}}>Mark Visited</button> 
            <button onClick={()=>{visitedCountryFlag(country)}}>Flag</button>
            <br />
            <br />
            <button onClick={handleVisited}>{visited ? 'visited':'goin on'}</button>
            {visited ? 'i have visited ': 'i want visited'}
            
        </div>
    );
};

export default Country;