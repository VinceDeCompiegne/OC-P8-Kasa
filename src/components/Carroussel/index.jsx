import { useState  } from 'react'

import '../../style/style.css'

import FlecheG from "../../assets/images/FlecheG.svg"
import FlecheD from "../../assets/images/FlecheD.svg"

function Carroussel({image}) {

    const[indexImage,setIndexImage] = useState (0,[])

    const handleDroite = () => {
        if (indexImage<image.length-1){setIndexImage((indexImage) => indexImage + 1)}else{setIndexImage((indexImage) => 0)}

    }
    const handleGauche = () => {
        if (indexImage>0){setIndexImage((indexImage) => indexImage - 1)}else{setIndexImage((indexImage) => image.length-1)}
    }

    const img = image[indexImage]
    // const i = image.map( (object,index) =><div key={index} className=`dot dot_${(dot===({index}))?"selected":""}`></div>)
    if (image.length>1){
    return (

        <section className="carroussel"> 

        <img
          className="arrow arrow_left"
          data-testid="job-carroussel-arrow_left"
          src={FlecheG}
          alt="carroussel gauche"
          onClick={()=>handleGauche()}
        />
        <img
          className="carroussel-img"
          data-testid="job-carroussel-img"
          src={img}
          alt="carroussel"
        />
        <img
          className="arrow arrow_right"
          data-testid="job-carroussel-arrow_right"
          src={FlecheD}
          alt="carroussel droite"
          onClick={()=>handleDroite()}
        />

        <div className="dots">

          { image.map((object, index) => <div key={index} data-testid="job-carroussel-dot" className={`dot dot_${(index)===(indexImage)}`}></div>) }

        </div>

        </section>
    
    )

  }else{

    return(
        <section className="carroussel"> 

            <img
            className="carroussel-img"
            src={img}
            alt="carroussel"
            />

        </section>
    )

  }
}

export default Carroussel