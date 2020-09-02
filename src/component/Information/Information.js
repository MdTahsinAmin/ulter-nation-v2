import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Contries from '../Countries/Contries';
import './Information.css'
const Information = () => {

    const [contries , setContries] = useState([]);

    useEffect(()=>{
      const url ='https://restcountries.eu/rest/v2/all';
      axios(url).then(data =>setContries(data.data));
    },[])
    return (
        <div className='information'>
          <div className='countries-information'>
         
             {
                 contries.map(country => <Contries country={country} key={country.numericCode}></Contries>)
             }
          </div>
          <div className ='extra-information'>
          <h4 className='text'>Number of Countries : { contries.length }</h4>
          </div>            
        </div>
    );
};

export default Information;