import React ,{ useState ,useEffect} from 'react';
import {useParams} from 'react-router-dom';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../config/apiConfig';


const CastList = (props) => {

const {category} = useParams();

const [ casts, setCasts] = useState();

useEffect(() => {
    const getCredit = async () => {
        const res = await apiConfig.credits(category, props.id);
    }
})

  return (
    <div>
        
    </div>
  )
}

export default CastList