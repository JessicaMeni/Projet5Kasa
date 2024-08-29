import './Valeur.scss'
import { useState } from 'react'
import {
  Button,
  Collapse,
} from 'react-bootstrap' /* collapse et button sont des hook. pourquoi importer button ? */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function Valeur({ titredelavaleur, contenu }) {
  const [ouvert, setOuvert] = useState(false)
  /*   const [respectyty, openRespectyty] = useState(false) */

  return (
    <section className="SECTION">
      <div className="les-valeurs">
        <h2>{titredelavaleur}</h2>
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
          <p className="collapse-content">{contenu}</p>
        </Collapse>
      </div>
    </section>
  )
}
