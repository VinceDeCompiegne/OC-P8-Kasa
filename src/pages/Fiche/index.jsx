import { Fragment } from 'react'
import { useParams, Navigate   } from 'react-router-dom'

import '../../style/style.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { useFetch } from "../../utils/UseFetch"

import Carroussel from "../../components/Carroussel"
import Collapse from "../../components/Collapse"
import Rating from "../../components/Rating"

function Fiche() {

    const { appart } = useParams()
    const { data, isLoading, error } =  useFetch(`http://localhost:8080/api/properties/${appart}`,[])


    if(error&!isLoading){return(<Navigate  to="/erreur" />)}
 
    return (
         (!isLoading)?(
            <Fragment>
                <Header />
                    <Carroussel image={data.pictures}/> 
                    <article className="fiche-info">
                        <section className="fiche-location">
                            <div className="fiche-title">
                                <h1>{data.title}</h1>
                                <h3>{data.location}</h3>
                                {data.tags.map((tag,index)=><span key={`tag-${index}`} className="fiche-location-tag">{tag}</span>)}
                            </div>
                        </section>
                        <section className="fiche-host">
                            <div className="fiche-host-identite">
                                <h3>{data.host.name}</h3>
                                <div className="fiche-portrait">
                                    <img className="fiche-portrait" src={data.host.picture} alt="Portrait of the Host" />
                                </div>
                            </div>
                            <div>
                                <Rating rating={data.rating}/>
                            </div>
                        </section>
       

                    </article>
                    <div className="ficheDescription">
                        <div className="fiche-collapse">
                            <Collapse 
                                title="Description" 
                                description={data.description} 
                            />
                        </div>
                        <div className="fiche-collapse">
                            <Collapse                             
                                title="Equipement" 
                                description={data.equipments.map((equipment,index)=><p key={`equipemnt-${index}`}>{equipment}</p>)} 
                            />
                        </div>
                    </div>  
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