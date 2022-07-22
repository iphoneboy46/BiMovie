import React, { useState, useEffect, useRef } from 'react';
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

    const iframeRef = useRef(null);

    const item = props.item;

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height',height);
    },[])

    return(
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe 
                src={`https://www.youtube.com/embed/${item.key}`} 
                ref={iframeRef}
                width="100%"
                title="video"
            >    
            </iframe>
            
        </div>
    )
}

export default VideoList