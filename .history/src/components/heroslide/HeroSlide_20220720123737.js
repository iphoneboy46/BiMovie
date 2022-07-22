import React, { useState, useEffect } from 'react';
import styles from './HeroSlide.module.scss';
import tmdbApi ,{ category , movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import SwiperCore from 'swiper';
import {AutoPlay} from 'swiper/AutoPlay'
import {Swiper, SwiperSlide} from 'swiper/react';

const HeroSlide = () => {
    SwiperCore.use([AutoPlay]);

    const [movieItems, setMovieItems] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1};
            try{
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.results.slice(0, 4));
                console.log(response);
            } catch{
                console.error('error')
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