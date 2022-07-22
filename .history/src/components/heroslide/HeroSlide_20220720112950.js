import React, { useState, useEffect } from 'react'
import styles from './HeroSlide.module.scss'
import tmdbApi ,{category,movieType} from '../../api/tmdb'
import apiConfig from '../../api/apiConfig'

const HeroSlide = () => {

    const [movieItems, setMovieItems] = useState([])

    useEffect(() => {

    },[])

  return (
    <div className={styles.heroSlide}>
        HeroSlide
    </div>
  )
}

export default HeroSlide