import { useState,Fragment } from 'react'

import '../../style/style.css'

import FlecheH from "../../assets/images/FlecheH.svg"

function Collapse({title,description}) {

    const[Visible,setVisible] = useState ("",[])
    const[Fleche,setFleche] = useState ("",[])

    const handleToggle = () => {
        setVisible((current) => !current);
        if(Visible==="collapse-animation-block"){setVisible("collapse-animation-none")}else{setVisible("collapse-animation-block")}
        if(Fleche==="collapse-animation-fleche-h"){setFleche("collapse-animation-fleche-b")}else{setFleche("collapse-animation-fleche-h")}
    }

    return (
        <section  className="collapse"> 
            <div data-testid="job-Click" onClick={() => handleToggle()} className="collapse-bouton">
                <p className="collapsible">{title}</p>
                <img className={`collapse-fleche ${Fleche}`} src={FlecheH} alt="Indicateur d'ouverture du Collapse" />
            </div>
            <div data-testid='job-desc' className={`content ${Visible}`}>
                <article className="collapse-article">{description}</article>
            </div>
        </section>
    )
  }
  
  export default Collapse