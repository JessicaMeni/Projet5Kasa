import './Card.scss'
import logements from '../../datas/logements.json'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div className="div-gallery">
      {logements.map((logement) => (
        <div key={logement.id} className="article">
          <Link to={`/logement/${logement.id}`}>
            <img
              src={logement.cover}
              alt={logement.title}
              className="img-gallery"
            ></img>
            <figcaption className="titre-de-la-location">
              {logement.title}
            </figcaption>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Card
/*   <a href={'logement-' + id}> */
