import { Fragment } from 'react'
import { Navigate   } from 'react-router-dom'

import '../../style/style.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card  from '../../components/Card'

import { useFetch } from "../../utils/UseFetch"

import imageHeader from '../../assets/images/home.png'

// import { useParams } from "react-router-dom";

function Home() {

  const { data, isLoading, error } =  useFetch(`http://localhost:8080/api/properties`,[])

  try{
    
    const properties = data

    if(error&!isLoading){return(<Navigate  to="/erreur" />)}


    return(!isLoading?(  <Fragment>
      <Header/>
        <img className="home-picture" src={imageHeader} alt="visuel de la page home"/>

            <section className="home-card-section">
        
        
        { properties?.map((property, index) =>  <Card key={`${property.id} - ${index}`} 
                                                      id={property.id} 
                                                      title={property.title} 
                                                      cover={property.cover} /> )}
    
        </section> 
      <Footer />
  </Fragment>)
  :
  (<Fragment>
      <Header/>
      <img className="home-picture" src={imageHeader} alt="visuel de la page home"/>
      <section className="home-card-section">
        <div>Waiting please !</div>
      </section>
      <Footer />
  </Fragment>)
  
  )
  }catch(err){
    console.log(err)
  }
  

}
  
export default Home