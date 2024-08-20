import './home.scss'
import imgBordDeMer from '../../assets/img-banner/bord-de-mer.png'

function Home() {
  return (
    <div className="home">
      <img
        src={imgBordDeMer}
        className="banner-bord-de-mer"
        alt="paysage de bord de mer"
      />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Home
