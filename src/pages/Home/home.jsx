import './home.scss'
import imgBordDeMer from '../../assets/img-banner/bord-de-mer.png'
import Card from '../../components/Card/card'

function Home() {
  const title = 'Chez vous, partout et ailleurs'
  return (
    <main className="home">
      <section>
        <img
          src={imgBordDeMer}
          className="affichage-bord-de-mer"
          alt="paysage de bord de mer"
        />
        <h1 className="h1-chez-vous">{title}</h1>
      </section>
      <section>
        <Card />
      </section>
    </main>
  )
}

export default Home
