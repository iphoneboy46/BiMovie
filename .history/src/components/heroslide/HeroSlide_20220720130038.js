import React, { useState, useEffect } from 'react';
import styles from './HeroSlide.module.scss';
import tmdbApi ,{ category , movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

const HeroSlide = () => {
   

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
       <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
       >
            {movieItems.map(function(item,index){
                return (
                    <SwiperSlide key={index}>
                        {({isActive}) => (
                            <img src={apiConfig.originalImage(item.bas)} alt="" />
                        )}
                    </SwiperSlide>
                )
            })
            })
       </Swiper>
    </div>
  )
}

export default HeroSlide