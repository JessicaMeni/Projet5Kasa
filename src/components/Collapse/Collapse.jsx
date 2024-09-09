import './Collapse.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function Collapse({ titreducollapse, contenu }) {
  const [ouvert, setOuvert] = useState(false)

  return (
    <section className="collapse">
      <div className="collapse-title-icon">
        <h2>{titreducollapse}</h2>
        <div className="div-icon-chevron-up" onClick={() => setOuvert(!ouvert)}>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`${ouvert ? 'rotated' : ''}`}
          />
        </div>
      </div>
      <div className={`div-collapse ${ouvert ? 'ouvert' : ''}`}>
        <span className="collapse-content">{contenu}</span>
      </div>
    </section>
  )
}
