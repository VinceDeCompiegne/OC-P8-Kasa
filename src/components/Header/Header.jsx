import { Link } from 'react-router-dom'

import '../../style/style.css'
import logo from '../../assets/images/LOGO_header.png'

function Header() {
    return (
        <div className="header-section">
            <img className="header-image" src={logo} alt="logo de kasa"/>
            <nav className="header-nav">
                <Link  to="/home">Home</Link>
                <Link  to="/apropos">A propos</Link>
            </nav>
        </div>
    )
  }
  
  export default Header