import React, { useEffect } from 'react';
import { Home } from './Home';
import '../Styles/MainContainer.css';
import Formations from './Formations';
import { Work } from './Work';
import { Loisirs } from './Loisirs';
import {Contact} from './Contact';
import { Footer } from './Footer';

import ScrollReveal from "scrollreveal";

function MainContainer() {

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    ScrollReveal().reveal(sections, {
      delay: 375,
      duration: 500,
      reset: true,
      easeing: "easy-in",
    });

  }, []);

  return (
    <main>
      <Home/>

      <Formations />

      <Work />

      <Loisirs />

      <Contact/>

      <Footer />

    </main>
  )
}

export {MainContainer}