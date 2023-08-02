import { useState  } from 'react'

import '../../style/style.css'

import FlecheH from "../../assets/images/FlecheH.svg"
import FlecheB from "../../assets/images/FlecheB.svg"

function Collapse({title,description}) {

    const[Visible,setVisible] = useState (false)
    const[Fleche,setFleche] = useState (FlecheB,[])

    const handleToggle = () => {
        setVisible((current) => !current);
        if(Fleche===FlecheH){setFleche(FlecheB)}else{setFleche(FlecheH)}
    }

    return (
        <section className="collapse"> 
            <div onClick={handleToggle} className="collapse-bouton">
                <p className="collapsible">{title}</p>
                <img className="collapse-fleche" src={Fleche} alt="Indicateur d'ouverture du Collapse" />
            </div>

            <div className={`content ${Visible===false?"none":"block"}`}>
                <p>{description}</p>
            </div>

        </section>
    )
  }
  
  export default Collapse