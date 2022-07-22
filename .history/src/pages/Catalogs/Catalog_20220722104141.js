import React from 'react';

import { useParams } from 'react-router-dom';
import PageHeader from '../../components/pageHeader/PageHeader';
import MovieGrid from '../../components/movieGrid/MovieGrid';

import { category as cate } from '../../api/tmdbApi';


export default function Catalog() {
  const { category } = useParams()
  console.log(category);

  return (
    <div>
      <PageHeader>
        {category === cate.movie ? 'Movie' : 'TV series'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </div>
  )
}
