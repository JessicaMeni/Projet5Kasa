import './home.scss'
import imgBordDeMer from '../../assets/img-banner/bord-de-mer.png'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'

function Home() {
  const title = 'Chez vous, partout et ailleurs'
  return (
    <main className="home">
      <Banner img={imgBordDeMer} alt={'paysage de bord de mer'} title={title} />{' '}
      {/* comment ajouter un alt ici? */}
      <section>
        <Card />
      </section>
    </main>
  )
}

export default Home
