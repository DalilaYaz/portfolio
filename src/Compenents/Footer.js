import React from 'react';
import "../Styles/Footer.css";
import HomeSocial from "./HomeSocial";

function Footer() {
  return <footer>
      <p className='footer_title'>Dalila Yazit</p>

    <div className='footerSocial'>
    {
                HomeSocial && HomeSocial.map((social)=>(
                    <a href={social.iconLink} key={social.id}>{social.iconName}</a>
                ))
    }
          
    </div>

        <p className='copy_right'>&#169; 2022 copy_right all rights reserved </p>
  </footer>
}

export {Footer};