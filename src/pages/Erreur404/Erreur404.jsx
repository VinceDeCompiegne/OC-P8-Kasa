import { Fragment } from 'react';
import { Link } from 'react-router-dom'
import '../../style/style.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Erreur404() {
    return (
    <Fragment>
        <Header />
        <div className="erreur404-message">
            <div className="erreur404-texte-404">404</div>
            <div className="erreur404-sousTexte-404">Oups! La page que vous demandez n'existe pas.</div>
            <Link className="erreur404-lien-retour-home" to="/home">Retourner sur la page d’accueil</Link>
        </div>
        <Footer />
    </Fragment>
    )
  }
  
  export default Erreur404