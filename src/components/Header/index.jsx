import './header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo-K.svg'
import logo2 from '../../assets/logo/logo-maison.svg'
import logo3 from '../../assets/logo/logo-s.svg'
import logo4 from '../../assets/logo/logo-a.svg'


function Header() {
  return (
    <header className="App-header">
      <div>
        <img src={logo} alt='logo Kasa' className='lmj-logo' />
        <img src={logo2} alt='logo Kasa' className='lmj-logo' />
        <img src={logo3} alt='logo Kasa' className='lmj-logo' />
        <img src={logo4} alt='logo Kasa' className='lmj-logo' />
      </div>
    <nav className='nav-links'>
      <ul className="nav-ul">
        <li><Link className='nav-link-link' to="/">Accueil</Link></li>
        <li><Link className='nav-link-link' to="/">A Propos</Link></li>
      </ul>
    </nav>
    </header>
  )
}

export default Header