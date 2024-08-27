import './Valeur.scss'
import { useState } from 'react'
import {
  Button,
  Collapse,
} from 'react-bootstrap' /* collapse et button sont des hook. pourquoi importer button ? */

export default function Valeur({ titredelavaleur, contenu }) {
  const [fiability, openFiability] = useState(false)
  /*   const [respectyty, openRespectyty] = useState(false) */

  return (
    <section className="SECTION">
      <div className="les-valeurs">
        <h2>{titredelavaleur}</h2>
        <div className="div-valeur">
          <Button
            className="button-content"
            /* variant="primary" a quoi ça sert ?*/
            onClick={() => openFiability(!fiability)}
          >
            <i className="fa-solid fa-chevron-up"></i>
          </Button>
        </div>
        <Collapse in={fiability}>
          <p className="collapse-content">{contenu}</p>
        </Collapse>
      </div>

      <br></br>

      {/* <div className="les-valeurs">
        <h2>Respect</h2>
        <div className="div-valeur">
          <Button
            className="button-content"
            onClick={() => openRespectyty(!respectyty)}
          >
            <i className="fa-solid fa-chevron-down"></i>
          </Button>
        </div>
        <Collapse in={respectyty}>
          <div className="collapse-content">
            {
              'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
            }
          </div>
        </Collapse>
      </div> */}
    </section>
  )
}
/* 'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'
'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' */
