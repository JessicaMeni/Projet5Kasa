import './home.scss'
import imgBordDeMer from '../../assets/img-banner/bord-de-mer.webp'
import Gallery from '../../components/Gallery/Gallery'
import Banner from '../../components/Banner/Banner'

function Home() {
  const title = (
    <>
      Chez vous, <span className="line-break">partout et ailleurs</span>{' '}
    </>
  ) /* <wbr> &nbsp;  */
  return (
    <main className="home">
      <Banner img={imgBordDeMer} alt={'paysage de bord de mer'} title={title} />{' '}
      {/* comment ajouter un alt ici? */}
      <section>
        <Gallery />
      </section>
    </main>
  )
}

export default Home
