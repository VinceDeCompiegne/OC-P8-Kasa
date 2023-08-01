import { Link } from 'react-router-dom'

import '../../style/style.css'

import rectangle from '../../assets/images/rectangle.png'

function Card({id,title,cover}) {
    return (
        <Link className="card-link" to={`Fiche/${id}`}>
            <article className="card-article">
                    <img className="card-img" src={cover} alt=" de la chambre d'hôtel montrant un lit" />
                    <img className="card-img-cache" src={rectangle} alt=" de la chambre d'hôtel montrant un lit" />
                    <h3 className="card-content">{title}</h3>
            </article>
        </Link>
    )
  }
  
  export default Card

















