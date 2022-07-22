import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './MovieGrid.scss';
import MovieCard from '../movieCard/MovieCard'
import tmdbApi from '../../api/tmdbApi'


const MovieGrid = (props) => {

  const [ items ,setItems] = useState([])

  const [page,setPage] = useState(1)

  const [totalPage,setTotalPage] = useState(0)

  const {keyword} = useParams();

  useEffect(() =>{
      const getList = async () => {
        let response = null;

        if(keyword === undefined){
            const params = {};
            switch(props.category){
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                    break;
                default: 
                    response = await tmdbApi.getTvList(tvType.popular, {params});    
            }
        }
      }
  },[])

  return (
    <div>MovieGrid 1</div>
  )
}

export default MovieGrid