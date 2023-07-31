import { Fragment } from 'react';
import '../../style/style.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Card  from '../../components/Card/Card'
import imageHeader from '../../assets/images/home.png'

function Home() {
    return (
        <Fragment>
            <Header/>

           
            <img className="home-picture" src={imageHeader} alt="visuel de la page home"/>
            
            <section className="home-card-section">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
            </section>

            <Footer />
        </Fragment>
    )
  }
  
  export default Home