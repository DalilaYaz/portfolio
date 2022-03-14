import React from 'react';
import '../Styles/Work.css';
import { WorkBox } from './WorkBox';

function Work() {
  return (
    <section className='work section bd_grid' id="work">
    <div className = "circle work_circleOne"></div>
    <div className = "circle work_circleThree"></div>

    <h2 className="section_title">Expériences Professionnelles</h2>

    <div className="WorkContainer bd_grid">

        <WorkBox box_name={"Poste de surveillante (job étudiant)"}/>
        <WorkBox box_name={"Promotion de l’offre de formation (job étudiant)"}/>
        <WorkBox box_name={"Caissière (job étudiant)"}/>
        <WorkBox box_name={"Vendeuse (job étudiant)"}/>

    </div>

    </section>
  )
}

export { Work};