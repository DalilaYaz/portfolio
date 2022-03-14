import React from 'react';
import {FaCheck} from 'react-icons/fa';
import '../Styles/Alert.css';

function Alert() {
  return (
    <div className='alert' id='alert'>
        <div className='iconBox'><FaCheck/></div>  
        <p className='alertText'>Message envoyé avec succès</p>  
    </div>
  )
}

export  {Alert};