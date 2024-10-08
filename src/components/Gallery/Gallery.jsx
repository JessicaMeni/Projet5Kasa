import './Gallery.scss'
import logements from '../../datas/logements.json'
import { Link } from 'react-router-dom'

function Gallery() {
  return (
    <div className="div-gallery">
      {logements.map((logement) => (
        <div key={logement.id} className="article">
          <Link to={`/logement/${logement.id}`}>
            <div className="gallery-gradient"></div>
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

export default Gallery
