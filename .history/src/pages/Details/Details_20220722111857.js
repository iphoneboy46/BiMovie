import React ,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig'


export default function Details() {

  const {category ,id} = useParams();

  const [item,setItems] = useState();

  useEffect(() => {
    const getDetails = async () => {
      const response = await tmdbApi.details(category,id,{params:{}});
      setItems(response);
      window.scrollTo(0,0);
    }
    getDetails();
  },[])

  return (
    <div>
        Details
    </div>
  )
}
