import './Carrousel.scss'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

function Carrousel({ pictures, altdelimage }) {
  const [index, setIndex] = useState(0)
  const picture = pictures[index]

  const previous = () => {
    let newIndex = index - 1
    if (newIndex < 0) {
      newIndex = pictures.length - 1 /* -1 pcq les tableaux commencent par 0 */
    }
    setIndex(newIndex)
  }

  const next = () => {
    let newIndex = index + 1
    if (newIndex > pictures.length - 1) {
      newIndex = 0
    }
    setIndex(newIndex)
  }

  return (
    <div className="carousel-item">
      <img
        className="img-slide"
        src={picture}
        alt={altdelimage} /* loading="lazy" */
      ></img>
      <span className="carousel-button prev-button" onClick={previous}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
      <span className="carousel-button next-button" onClick={next}>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
      <span className="compteur-de-photo">
        {index + 1} /{pictures.length}
      </span>
    </div>
  )
}

export default Carrousel
