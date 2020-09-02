import React from 'react';
import "./Contries.css"
import { Link, useHistory } from 'react-router-dom';
const Contries = (props) => {
 
     const {name,nativeName,region,subregion,flag,capital} = props.country;

     const history = useHistory()

     const hanlder = (name)=>{
         history.push(`/country/${name}`);
     }
    
    return (
        <div className="row">
            <div className="col-md-4 img-section">
              <img src={flag} alt=""/>
            </div>
            <div className="col-md-8 country-section">
            <h4>Country Name : <Link to={`/country/${name}`}>{name}</Link></h4>
              <h5>Capital : {capital}</h5>
              <h6>Native Name : {nativeName}</h6>
              <h6>Region : {region}</h6>
              <p>Subregion : {subregion}</p>
              <button onClick={()=> hanlder(name)} className='main-btn'>Futher Information</button>
            </div>
        </div>
    );
};

export default Contries;