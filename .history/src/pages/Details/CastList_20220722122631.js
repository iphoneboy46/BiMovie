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
        setCasts(res.casts.slice(0, 5));
    }
    getCredit();
},[category, props.id])

  return (
    <div className="casts">
        {
            casts.map((cast,index) => (
                <div className="casts__item">
                    <div className="casts__item__img" style={{ backgroundImage : `url(${apiConfig.w500Image(cast.profile_path)})`}}>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CastList