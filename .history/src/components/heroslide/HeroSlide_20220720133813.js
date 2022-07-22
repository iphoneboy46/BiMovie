import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styles from './HeroSlide.module.scss';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Button , {OutLineButton}  from '../button/Button'

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroSlide = () => {


    const [movieItems, setMovieItems] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovieItems(response.results.slice(0, 4));
                console.log(response);
            } catch {
                console.error('error')
            }
        }
        getMovies();
    }, [])

    return (
        <div className={styles.heroSlide}>
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
            >
                {movieItems.map(function (item, index) {
                    return (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <HeroSlideItems item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    )
                })
                }
            </Swiper>
        </div>
    )
}

const HeroSlideItems = (props) => {
    let history = useHistory();
    const item = props.item;

    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    return (
        <div
            className={`${styles.heroSlideItem} ${props.className}`}
            styles={{ backgroundImage: `url(${background})` }}
        >
            <div className={`${styles.heroSlideItemContent} ${styles.container}`}>
                <div className={styles.heroSlideItemContentInfo}>
                    <h2 className={styles.title}>
                        {item.title}
                    </h2>
                    <div className={styles.overview}>
                        {item.overview}
                    </div>
                    <div className={styles.btns}>
                        <Button onClick={()=> { history.push('/movies/' + item.id)}}>
                            Watch now
                        </Button>
                        <OutLineButton onClick={() =>{ console.log('trailer')}}>
                            Watch trailer
                        </OutLineButton>
                    </div>
                </div>
                <div className={styles.heroSlideItemContentPoster}>
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSlide