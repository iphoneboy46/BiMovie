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
        getCredit();
    }, [category, props.id])

    return (
        <div>VideoList</div>
    )
}

export default VideoList