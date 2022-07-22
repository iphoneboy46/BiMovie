import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './Details.scss'


export default function Details() {

  const { category, id } = useParams();

  const [item, setItems] = useState();

  useEffect(() => {
    const getDetails = async () => {
      const response = await tmdbApi.details(category, id, { params: {} });
      setItems(response);
      window.scrollTo(0, 0);
    }
    getDetails();
  }, [category, id])

  return (
    <div>
      {
        item && (
          <>
            <div className="banner" style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }}>
            </div>
            <div className="mb-3 movie-content container">
              <div className="movie-content__poster">
                <div className="movie-content__poster__img" style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }}>
                </div>
              </div>
              <div className="movie-content__info">
                {item.title || item.name}
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}
