import React,{useState, useEffect} from 'react';

import './MovieGrid.scss';
import MovieCard from '../movieCard/MovieCard'


const MovieGrid = (props) => {

  const [ items ,setItems] = useState([])

  const [page,setPage] = useState(1)

  const [totalPage,setTotalPage] = useState(0)

  useEffect(() =>{

  },[])

  return (
    <div>MovieGrid 1</div>
  )
}

export default MovieGrid