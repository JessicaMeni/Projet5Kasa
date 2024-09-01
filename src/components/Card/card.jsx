import './Card.scss'
import logements from '../../datas/logements.json'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div className="div-gallery">
      {logements.map((annonce) => (
        <div key={annonce.id} className="article">
          <Link to={`/logement/${annonce.id}`}>
            <img
              src={annonce.cover}
              alt={annonce.title}
              className="img-gallery"
            ></img>
            <figcaption className="titre-de-la-location">
              {annonce.title}
            </figcaption>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Card
/*   <a href={'logement-' + id}> */
