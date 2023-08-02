import { Fragment } from 'react';

import '../../style/style.css'
import data from './data'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Collapse from '../../components/Collapse'

function Apropos() {
    return (
    <Fragment>
        <Header />
        <div className="a-propos-marge">
            {data.map((info,index)=> <Collapse key={`${index}`}title={info.title} description={info.description}/>)}
        </div>
        <Footer />
    </Fragment>
    )
  }
  
  export default Apropos