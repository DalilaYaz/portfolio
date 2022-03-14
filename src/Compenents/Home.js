import React, {useEffect} from 'react';
import "../Styles/Home.css";
import HomeSocial, { homeSocial } from "./HomeSocial";
import profil1 from "../img/profil1.jpeg";
import {TimelineLite} from "gsap";

function Home() {

    useEffect (() => {
        const tl = new TimelineLite({delay: 0.3});

        tl.from('.homeTitle', {duration: 0.5, opacity:0, y:15, delay:1.5})
    }, []);

  return (
    <section className='home section bd_grid' id="accueil">
        <div className = "circle circleOne"></div>
        <div className = "circle circleTwo"></div>
        <div className = "circle circleThree"></div>

        <div className='homeData'>
            <h1 className='homeTitle'>
                Bonjour, je suis <br /> <span>Dalila Yazit</span> <br /> Étudiante en développement web et mobile
            </h1>

            <a href="" className='button'>
                Me contacter
            </a>

           <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-221a7.appspot.com/o/CV.pdf?alt=media&token=4b0458a7-f379-494b-bf1a-65c8f8ac3ea2" className="button">
               Mon CV
            </a>
        </div>

        <div className='homeSocial'>
            {
                HomeSocial && HomeSocial.map((social)=>(
                    <a href={social.iconLink} key={social.id}>{social.iconName}</a>
                ))
            }
        </div>

        <div className='homeIMg'>
            <img src={profil1} alt="" className="profileBg" />

            <div className="box box1">
                </div>
        </div>
    </section>
  )
}

export {Home};