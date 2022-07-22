import React ,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig'


export default function Details() {

  const {category ,id} = useParams();

  const [item,setItems] = useState();

  return (
    <div>
        Details
    </div>
  )
}
