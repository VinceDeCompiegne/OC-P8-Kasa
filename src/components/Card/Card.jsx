import { Link } from 'react-router-dom'

import '../../style/style.css'
import home from '../../assets/images/home.png'

function Card() {
    return (
        <Link className="card-link" to="/home">
            <article className="card-article">
                <img className="card-img" src={home} alt=" de la chambre d'hôtel montrant un lit" />
                <h3 className="card-content">Auberge la Cannebiére</h3>
            </article>
        </Link>
    )
  }
  
  export default Card

















