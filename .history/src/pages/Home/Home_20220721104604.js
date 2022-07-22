import React from 'react';
import HeroSlide from '../../components/heroslide/HeroSlide';
import {Link} from 'react-router-dom';
import  {OutLineButton} from '../../components/button/Button';
import MovieList from '../../components/movieList/MovieList'

export default function Home() {
  return (
    <div>
        <HeroSlide />
        <div className="container">
            <div className="section mb-3">
              <div className="section__header mb-2">
                    <h2>Trending Movies</h2>
                    <Link to="/movie">
                      <OutLineButton className="small">
                        View more
                      </OutLineButton>
                    </Link>
              </div>
            </div>
        </div>
    </div>
  )
}
