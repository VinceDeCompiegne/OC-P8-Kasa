import '../../style/style.css'
import starActive from '../../assets/images/star-active.svg'
import starInactive from '../../assets/images/star-inactive.svg'

function Rating({rating}) {

    
    return (
        <div className="rating-section">
            <img className="Rating" src={(rating>=1)?starActive:starInactive} alt="Rating Star 1"/>
            <img className="Rating" src={(rating>=2)?starActive:starInactive} alt="Rating Star 2"/>
            <img className="Rating" src={(rating>=3)?starActive:starInactive} alt="Rating Star 3"/>
            <img className="Rating" src={(rating>=4)?starActive:starInactive} alt="Rating Star 4"/>
            <img className="Rating" src={(rating>=5)?starActive:starInactive} alt="Rating Star 5"/>
        </div>
    )
  }
  
  export default Rating