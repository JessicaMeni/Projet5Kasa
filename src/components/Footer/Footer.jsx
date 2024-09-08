import './Footer.scss'
import logo from '../../assets/logo/LOGO-blanc.svg'

function Footer() {
  return (
    <footer className="footer-background">
      <div>
        <img src={logo} alt="logo Kasa" className="lmj-logo-footer" />
      </div>
      <span className="span-footer">© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}

export default Footer
