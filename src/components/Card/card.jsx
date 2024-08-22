import './card.scss'
import { logementsList } from '../../datas/logementsList.js'

function Card() {
  return (
    <div className="div-gallery">
      {logementsList.map(({ id, title, cover }) => (
        <article key={id} className="article">
          <img src={cover} alt={title} className="img-gallery"></img>
          <figcaption className="titre-de-la-location">{title}</figcaption>
        </article>
      ))}
    </div>
  )
}

export default Card
