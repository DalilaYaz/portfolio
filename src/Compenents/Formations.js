import React from 'react';
import '../Styles/Formations.css';
import { FormationsBox } from './FormationsBox';


function Formations() {
  return (
    <section className='formations section bd_grid' id="formations">
    <div className = "circle formations_circleOne"></div>
    <div className = "circle formations_circleThree"></div>

    <h2 className="section_title">Formations</h2>

    <div className="formationsContainer bd_grid">

        <FormationsBox box_name={"Licence générale informatique"}/>
        <FormationsBox box_name={"Master 1 ISIDIS"}/>
        <FormationsBox box_name={"Licence professionnelles dévelement web et mobile"}/>
        <FormationsBox box_name={"Baccalauréat Scientifique"}/>

    </div>
    </section>
  )
}

export default Formations