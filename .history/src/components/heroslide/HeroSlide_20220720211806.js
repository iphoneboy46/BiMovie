import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSlide.scss';
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
        <div className="hero-Slide">
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
    let history = useNavigate();
    const item = props.item;

    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{backgroundImage: `url(${background})` }}
        >
            <div className='hero-slide__item__Content container'>
                <div className='hero-slide__item__Content__Info'>
                    <h2 className='title'>
                        {item.title}
                    </h2>
                    <div className='overview'>
                        {item.overview}
                    </div>
                    <div className='btns'>
                        <Button onClick={()=> { history.push('/movies/' + item.id)}}>
                            Watch now
                        </Button>
                        <OutLineButton onClick={() =>{ console.log('trailer')}}>
                            Watch trailer
                        </OutLineButton>
                    </div>
                </div>
                <div className='hero-slide__item__content__poster'>
                    <img  src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSlide