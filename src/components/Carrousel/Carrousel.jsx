import './Carrousel.scss'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

/* import Slider from 'react-slick' */
/* import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css' */

function Carrousel({ pictures, altdelimage }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((current) =>
      current === 0 ? pictures.lenght - 1 : current - 1
    )
  }
  const handleNext = () => {
    setCurrentIndex((current) =>
      current === pictures.length - 1 ? 0 : current + 1
    )
  }

  return (
    <div class="carousel-item">
      <img
        className="img-slide"
        src={pictures[currentIndex]}
        alt={altdelimage} /* loading="lazy" */
      ></img>
      <span className="carousel-button prev-button" onClick={handlePrev}>
        {''}
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
      <span className="carousel-button next-button" onClick={handleNext}>
        {''}
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </div>
  )
}

export default Carrousel
