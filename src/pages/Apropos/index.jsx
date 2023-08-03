import { Fragment } from 'react';

import '../../style/style.css'
import data from './data'

import imageHeader from '../../assets/images/home.png'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Collapse from '../../components/Collapse'

function Apropos() {
    return (
    <Fragment>
        <Header />
        <img className="home-picture" src={imageHeader} alt="visuel de la page home"/>
        <div className="a-propos-marge">
            {data.map((info,index)=> <Collapse key={`${index}`} className="a-propos-collapse" title={info.title} description={info.description}/>)}
        </div>
        <Footer />
    </Fragment>
    )
  }
  
  export default Apropos