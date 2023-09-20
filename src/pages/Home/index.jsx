import { Fragment } from 'react'
import { Navigate   } from 'react-router-dom'

import '../../style/style.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card  from '../../components/Card'

import { useFetch } from "../../utils/UseFetch"

import imageHeader from '../../assets/images/home.png'

function Home() {

  
  
  let { data, isLoading, error } =  useFetch(`https://oc-p8-kasa.vincent-deramaux-portfolio.fr/api/properties`,[]);
  
  if (localStorage.getItem('home')!=null){
    data = localStorage.getItem('home');
    isLoading = false;
    error = false;
  }
  

  try{
    
    const properties = data;

    localStorage.setItem('home',properties);

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