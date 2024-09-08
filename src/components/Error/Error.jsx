import './Error.scss'

function Error() {
  return (
    <div className="page-erreur-404">
      <p className="er-404">404</p>
      <h1 className="oups404">
        <span className="retour-ligne">Oups! La page que </span>vous demandez
        n'existe pas
      </h1>
      <a href="/" className="retour-page-accueil">
        Retournez sur la page d'accueil
      </a>
    </div>
  )
}

export default Error
