import React from 'react';

import './MovieCard.scss';
import {Link} from 'react-router-dom';

import Button from '../button/Button';

import {category} from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';



const MovieCard = props => {
    const item = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)

  return (
    <div>

    </div>
  )
}

export default MovieCard