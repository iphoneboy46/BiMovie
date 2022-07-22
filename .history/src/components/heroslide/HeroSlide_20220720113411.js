import React, { useState, useEffect } from 'react'
import styles from './HeroSlide.module.scss'
import tmdbApi ,{category,movieType} from '../../api/tmdb'
import apiConfig from '../../api/apiConfig'

const HeroSlide = () => {

    const [movieItems, setMovieItems] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}
            try{
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.result.slice(0.4));
                console.log(response);
            } catch{
                console.log('error')
            }
        }
        getMovies();
    },[])

  return (
    <div className={styles.heroSlide}>
        HeroSlide
    </div>
  )
}

export default HeroSlide