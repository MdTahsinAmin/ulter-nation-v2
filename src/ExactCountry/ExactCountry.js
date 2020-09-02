import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ExactCountry.css'
import Some from '../Some/Some';
const ExactCountry = () => {
    const {countryName} = useParams();
   
    const [country , setcountry] = useState({})
   
    useEffect(()=>{
       fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
       .then(response => response.json())
       .then(data=>setcountry(data[0]))
    },[])
     
    console.log(country.borders);
    
    
    return (
        <div className ='row'>
           <div className='col-md-4 img-section'>
             <img src={country.flag} alt=""/>
           </div>
           <div className ='col-md-8'>
             <h3>Name : {country.name}</h3>
              <h3>Capital : {country.capital}</h3>
             <h4>Native Name  : {country.nativeName} . alpha3Code : {country.alpha3Code}</h4>
             <h5>Demonym : {country.demonym}</h5>
             <h6>Region : {country.region}</h6>
             <h6>Top Level Domain:{country.topLevelDomain}</h6>
             <h6>Population : {country.population}</h6>
             <p>Calling Codes : {country.callingCodes}</p>
            
           </div>
        </div>
    );
};

export default ExactCountry;