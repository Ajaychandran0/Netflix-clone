import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import './RowPost.css'
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../Constants/constants';

function RowPost(props) {

    const [movie, setMovie] = useState([]);
    const [urlId, setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data)
            setMovie(response.data.results)
        })

    }, []);

    const opts = {
        height: '480',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            origin: 'http://localhost:3000',
            autoplay: 1
        },
    };

    const handleMovie = (id) => {
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            }
        })

    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movie.map((movie) =>
                        <img onClick={() => { handleMovie(movie.id) }} className={props.isSmall ? "smallPoster" : "poster"} src={`${imageUrl + movie.backdrop_path}`} alt="poster" />
                    )
                }
            </div>
            {urlId && <YouTube videoId={urlId.key} opts={opts} />}

        </div>
    )
}

export default RowPost
