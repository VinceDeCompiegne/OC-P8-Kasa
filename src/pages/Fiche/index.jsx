import { Fragment } from 'react'
import { useParams, Navigate   } from 'react-router-dom'

import '../../style/style.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { useFetch } from "../../utils/UseFetch"

// import Image from "../../assets/images/home.png"
import Carroussel from "../../components/Carroussel"

// import Collapse from "../../components/Collapse"


function Fiche() {

    const { appart } = useParams()
    const { data, isLoading, error } =  useFetch(`http://localhost:8080/api/properties/${appart}`)


    if(error&!isLoading){return(<Navigate  to="/erreur" />)}

    return (
         (!isLoading)?(
            <Fragment>
                <Header />
                    <Carroussel image={data.pictures}/>  
                <Footer />
            </Fragment>
         ):(
            <Fragment>
                <Header />
                <section className="fiche-card-section">
                    <div>Waiting please !</div>
                </section>
                <Footer />
            </Fragment>
        )
    
  )}
  
  export default Fiche