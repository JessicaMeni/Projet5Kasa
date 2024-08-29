import { logementsList } from '../../datas/logementsList.js'
import './Fiche.scss'
import { useState } from 'react'
import {
  Button,
  Collapse,
} from 'react-bootstrap' /* collapse et button sont des hook. pourquoi importer button ? */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function Fiche({
  pictures,
  title,
  host,
  location,
  tags,
  rating,
  description,
  equipments,
}) {
  const [ouvert, setOuvert] = useState(false)
  return (
    <div className="fiche-de-logement">
      {logementsList.map(
        ({
          id,
          pictures,
          title,
          host,
          location,
          tags,
          rating,
          description,
          equipments,
        }) => (
          <div key={id} className="juste-id">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src={pictures[0]}
                alt={title}
                loading="lazy"
              ></img>
            </div>
            <h2 className="titre-de-la-location">{title}</h2>
            <div>{}</div>
            <div>{location}</div>
            <div>{tags}</div>
            <div>{rating}</div>

            <div className="les-valeurs">
              <h3>Description</h3>
              <div className="div-valeur">
                <Button
                  className="button-content"
                  aria-label="bouton-contenu"
                  /* variant="primary" a quoi ça sert ?*/
                  onClick={() => setOuvert(!ouvert)}
                >
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className={`${ouvert ? 'rotated' : ''}`}
                  />
                </Button>
              </div>
            </div>
            <div className="div-collapse">
              <Collapse in={ouvert}>
                <p className="collapse-content">{description}</p>
              </Collapse>
            </div>
            <div>{equipments}</div>
          </div>
        )
      )}
    </div>
  )
}
