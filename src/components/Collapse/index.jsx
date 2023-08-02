import { useState  } from 'react'

import '../../style/style.css'

import FlecheH from "../../assets/images/FlecheH.svg"

function Collapse({title,description}) {

    const[Visible,setVisible] = useState ("none",[])
    const[Fleche,setFleche] = useState ("collapse-animation-fleche-h",[])

    const handleToggle = () => {
        setVisible((current) => !current);
        if(Visible==="block"){setVisible("none")}else{setVisible("block")}
        if(Fleche==="collapse-animation-fleche-h"){setFleche("collapse-animation-fleche-b")}else{setFleche("collapse-animation-fleche-h")}
    }

    return (
        <section className="collapse"> 
            <div onClick={handleToggle} className="collapse-bouton">
                <p className="collapsible">{title}</p>
                <img className={`collapse-fleche ${Fleche}`} src={FlecheH} alt="Indicateur d'ouverture du Collapse" />
            </div>

            <div className={`content ${Visible}`}>
                <p>{description}</p>
            </div>

        </section>
    )
  }
  
  export default Collapse