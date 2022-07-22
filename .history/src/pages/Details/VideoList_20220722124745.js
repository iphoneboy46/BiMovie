import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig'

const VideoList = (props) => {

    const { category } = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await tmdbApi.getVideos(category, props.id);
            setVideos(res.cast.slice(0, 5));
        }
        getVideos();
    }, [category, props.id])

    return (
       <div>
        {
            videos.map((video,index) =>(
                <Video key={index} item={video} />
            ))
       }
       </div>
    )
}

const Video = (props) => {
    return(
        <div className="video">
            <div className="video__title">
                <h2>{props.name}</h2>
            </div>
            <iframe src={`https://www.youtube.com/embed/${props.key}`} frameborder="0"></iframe>
        </div>
    )
}

export default VideoList