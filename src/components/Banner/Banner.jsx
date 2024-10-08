import './Banner.scss'

function Banner({ img, title }) {
  return (
    <section className="section-banner">
      <img className="img-banner" src={img} alt={'banner'} />
      <h1 className="h1-chez-vous">{title}</h1>
    </section>
  )
}
export default Banner
