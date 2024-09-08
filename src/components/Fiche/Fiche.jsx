import { useParams } from 'react-router-dom'
import logements from '../../datas/logements.json'
import './Fiche.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Fiche() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)

  return (
    <div key={`${id}`} className="fiche-de-logement">
      <div className="title-location-tags-div">
        <h2 className="titre-de-logement" key={`title-${logement.id}`}>
          {logement.title}
        </h2>
        <p key={`location-${logements.id}`} className="localisation">
          {logement.location}
        </p>
        <ul key={`tags-${logements.id}`} className="tags">
          {logement.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="rating-host-div">
        <div key={`rating-${logements.id}`} className="rating">
          {logement.rating}
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="host-div">
          <div className="host-name" key={`host.name-${logements.id}`}>
            {logement.host.name.replace(' ', '\n')}
          </div>
          <img
            className="host-pic"
            src={logement.host.picture}
            alt="portrait de [{logements.host.name}]"
            key={`logements.host.picture-${logements.id}`}
          ></img>
        </div>
      </div>
    </div>
  )
}
