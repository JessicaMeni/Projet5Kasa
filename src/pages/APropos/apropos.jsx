import './apropos.scss'
import imgPaysageMontagne from '../../assets/img-banner/paysage-montagne.png'

function Apropos() {
  return (
    <main className="main">
      <img
        src={imgPaysageMontagne}
        className="affichage-montagne"
        alt="paysage de montagnes"
      />
      <h2>Fiabilité</h2>
      <h2>Respect</h2>
      <h2>Service</h2>
      <h2>Sécurité</h2>
    </main>
  )
}

export default Apropos
