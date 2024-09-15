import { useParams } from 'react-router-dom'
import logements from '../../datas/logements.json'
import './Fiche.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Fiche() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)
  const stars = Array.from({ length: 5 }, (_, nbr) => {
    return nbr < logement.rating ? (
      <FontAwesomeIcon icon={faStar} className="orange-star" />
    ) : (
      <FontAwesomeIcon icon={faStar} className="grey-star" />
    )
  })

  return (
    <div key={`${id}`} className="fiche-de-logement">
      <div className="title-location-tags-div">
        <h2 key={`title-${logement.id}`} className="titre-de-logement">
          {logement.title}
        </h2>
        <p key={`location-${logement.id}`} className="localisation">
          {logement.location}
        </p>
        <ul className="tags">
          {logement.tags.map((tag, index) => (
            <li key={`tag-${logement.id}-${index}`}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="rating-host-div">
        <div key={`rating-${logement.id}`} className="rating">
          {stars.map((star, index) => (
            <span key={index} className="star-icon">
              {star}
            </span>
          ))}
        </div>

        <div className="host-div">
          <div className="host-name" key={`host.name-${logement.id}`}>
            {logement.host.name.replace(' ', '\n')}
          </div>
          <img
            className="host-pic"
            src={logement.host.picture}
            alt={`portrait de ${logement.host.name}`}
            key={`host.picture-${logement.id}`}
          ></img>
        </div>
      </div>
    </div>
  )
}
