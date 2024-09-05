import './logementpage.scss'
import { useParams } from 'react-router-dom' /* pour obtenir l'ID du logementg à partir de l'URL */
import logements from '../../datas/logements.json'
import Fiche from '../../components/Fiche/Fiche'
import Error from '../../components/Error/Error'
import Collapse from '../../components/Collapse/Collapse'
import Carrousel from '../../components/Carrousel/Carrousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function FicheDeLogement() {
  const { id } = useParams()
  const logement = logements.find(
    (logement) => logement.id === id
  ) /* On utilise find() pour rechercher dans le tableau logements le logement correspondant à l'ID récupéré par useParams(). Seul ce logement sera utilisé pour afficher les détails. */
  if (!logement) {
    return (
      <div>
        <Error />
      </div>
    )
  }

  return (
    <main className="fiche-du-logement">
      <div>
        <Carrousel
          key={`pictures-${logements.id}`}
          pictures={logement.pictures}
          altdelimage={logement.title}
        />
        <br></br>
        <Fiche />
        <div className="div-description-equipements">
          <Collapse
            titreducollapse="Description"
            key={`description-${logements.id}`}
            contenu={logement.description}
          />
          <Collapse
            titreducollapse="Equipement"
            key={`equipment-${logements.id}`}
            contenu={logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          />
        </div>
      </div>
    </main>
  )
}

export default FicheDeLogement
