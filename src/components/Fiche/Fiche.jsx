import { useParams } from 'react-router-dom'
import logements from '../../datas/logements.json'
import './Fiche.scss'

export default function Fiche() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)

  return (
    <div key={`${id}`} className="fiche-de-logement">
      <div className="un">
        <div className="deux">
          <h2 className="titre-de-logement" key={`title-${logement.id}`}>
            {logement.title}
          </h2>
          <p key={`location-${logements.id}`} className="localisation">
            {logement.location}
          </p>
        </div>

        <div className="trois">
          <span
            className="nom-host-de-logement"
            key={`host.name-${logements.id}`}
          >
            {logement.host.name.replace(' ', '\n')}
          </span>
          <img
            src={logement.host.picture}
            alt="portrait de [{logements.host.name}]"
            key={`logements.host.picture-${logements.id}`}
            className="img-host-de-logement"
          ></img>
        </div>
      </div>

      <div className="quatre">
        <ul key={`tags-${logements.id}`} className="tags">
          {logement.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>

        <div key={`rating-${logements.id}`} className="rating">
          {logement.rating}
        </div>
      </div>
    </div>
  )
}
