import './Banner.scss'

function Banner({ img, title }) {
  /* const title = 'Chez vous, partout et ailleurs' */
  return (
    <section className="section-banner">
      <img className="img-banner" src={img} alt={''} />
      <h1 className="h1-chez-vous">{title}</h1>
    </section>
  )
}
export default Banner
