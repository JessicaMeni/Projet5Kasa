import logements from '../../datas/logements.json'
import './Carrousel.scss'

function Carrousel(pictures, title) {
  return (
    <div class="carousel-item active">
      <img
        class="d-block w-100"
        src={pictures[0]}
        alt={title}
        loading="lazy"
      ></img>
    </div>
  )
}

export default Carrousel
