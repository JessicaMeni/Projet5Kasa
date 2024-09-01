import logements from '../../datas/logements.json'
import './Fiche.scss'
import Collapse from '../../components/Collapse/Collapse'

export default function Fiche() {
  return (
    <div className="fiche-de-logement">
      {logements.map(
        ({
          id,
          title,
          host,
          location,
          tags,
          rating,
          description,
          equipments,
        }) => (
          <div key={`${id}`} className="juste-id">
            <h2 className="titre-de-la-location" key={`${title}-${id}`}>
              {title}
            </h2>
            <div key={`${host.name}-${id}`}>{host.name}</div>
            <img
              src={host.picture}
              alt="portrait de [{host.name}]"
              key={`${host.picture}-${id}`}
            ></img>
            <p key={`${location}-${id}`}>{location}</p>
            <span key={`${tags}-${id}`}>{tags}</span>
            <div key={`${rating}-${id}`}>{rating}</div>
            <div className="div-description-equipements">
              <Collapse
                titreducollapse="Description"
                contenu={description}
                key={`${description}-${id}`}
              />
              <Collapse
                titreducollapse="Equipement"
                contenu={equipments}
                key={`${equipments}-${id}`}
              />
            </div>
          </div>
        )
      )}
    </div>
  )
}
