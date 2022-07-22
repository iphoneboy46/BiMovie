import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import CastList from "./CastList";

import "./Details.scss";

export default function Details() {
  const { category, id } = useParams();

  const [item, setItems] = useState();

  useEffect(() => {
    const getDetails = async () => {
      const response = await tmdbApi.details(category, id, { params: {} });
      setItems(response);
      window.scrollTo(0, 0);
    };
    getDetails();
  }, [category, id]);

  return (
    <div>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          >
          </div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.backdrop_path || item.poster_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {
                  item.genres &&
                  item.genres.slice(0, 5).map((genre, index) => (
                    <span key={index} className="genres__item">{genre.name}</span>
                  ))
                }
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                {/* {casts-list} */}
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
                <VideoList id={props.id} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}