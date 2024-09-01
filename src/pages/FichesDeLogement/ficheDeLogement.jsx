/* import logements from '../../datas/logements.json' */
import Fiche from '../../components/Fiche/Fiche'
/* import Collapse from '../../components/Collapse/Collapse' */

function FicheDeLogement() {
  return (
    <main className="fiche-du-logement">
      <div className="jaimeraibienleid">
        <Fiche />
        {/*         <div className="div-description-equipements">
          {logements.map(({ description }) => (
            <Collapse titreducollapse="Description" contenu={description} />
          ))}
          {logements.map(({ equipments }) => (
            <Collapse titreducollapse="Equipement" contenu={equipments} />
          ))}
        </div> */}
      </div>
    </main>
  )
}

export default FicheDeLogement
