import '../../style/style.css'
import logo from '../../assets/images/LOGO_footer.png'

function Footer() {
    return (
        <section className="footer-section">
            <div>
                <img className="footer-image" src={logo} alt="logo de kasa"/>
                <h3>© 2020 Kasa. All rights reserved</h3>
            </div>
        </section>
    )
  }
  
  export default Footer