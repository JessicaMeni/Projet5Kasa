import './header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/LOGO.svg'

function Header() {
  return (
    <header className="App-header">
      <div>
        <img src={logo} alt="logo Kasa" className="lmj-logo" />
      </div>
      <nav>
        <ul className="nav-ul">
          <li className="nav-li">
            <Link className="nav-link accueil" to="./">
              Accueil
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link apropos" to="/">
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
