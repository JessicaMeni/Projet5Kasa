import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo/LOGO.svg'

function Header() {
  const location = useLocation()
  return (
    <header className="header">
      <div>
        <img src={logo} alt="logo Kasa" className="lmj-logo" />
      </div>
      <nav>
        <ul className="nav-ul">
          <li className="nav-li">
            <Link
              className={`nav-link accueil ${
                location.pathname === '/' ? 'active-link' : ''
              }`}
              to="./"
            >
              Accueil
            </Link>
          </li>
          <li className="nav-li">
            <Link
              className={`nav-link apropos ${
                location.pathname === '/APropos' ? 'active-link' : ''
              }`}
              to="./APropos"
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
