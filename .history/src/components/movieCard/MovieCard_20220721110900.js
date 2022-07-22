import React from 'react';

import './MovieCard.scss';
import {Link} from 'react-router-dom';

import Button from '../button/Button';

import {category} from '../../api/tmdbApi';



const MovieCard = props => {
    const item = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

  return (
    <div>

    </div>
  )
}

export default MovieCard