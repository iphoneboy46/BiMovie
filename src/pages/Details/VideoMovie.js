import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig'

const VideoMovie = (props) => {
    const iframeRef = useRef(null);
    let src = `https://2embed.org/embed/${props.id}`;
    console.log(props.id);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, [])

    return (
        <div className="video">
            <iframe
                src={src}
                ref={iframeRef}
                width="100%"
                title="video"
            >
            </iframe>
        </div>
    )
}


export default VideoMovie