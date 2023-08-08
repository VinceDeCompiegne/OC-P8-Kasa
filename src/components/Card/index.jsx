import { Link } from 'react-router-dom'

import '../../style/style.css'

import rectangle from '../../assets/images/rectangle.png'

function Card({id,title,cover}) {
    return (
        <Link className="card-link" data-testid="job-link-card" to={`fiche/${id}`}>
            <article  className="card-article">
                    <img className="card-img" data-testid="job-img-card" src={cover} alt="reprsentation de l'appartement sur carte" />
                    <img className="card-img-cache" src={rectangle} alt="Ombre sur la carte" />
                    <h3 className="card-content" data-testid="job-h3-card">{title}</h3>
            </article>
        </Link>
    )
  }
  
  export default Card

















