import React, { useEffect } from 'react'
import axios from './axios';
import { useState } from 'react';



function DynamicRows(props)
{   
    // Code to get data from api 
    const [storeVal, storeFunction] = useState([]);
    // const [id,setId]=useState(null)
    useEffect(() =>
    {
        async function fetchData(){
            const result = await axios.get(props.link)
            storeFunction(result.data.results)
        }
        fetchData()
    }, [])
    // ___________________________

    function openTrailer(url)
    {
        window.location.href = url;
        const result = axios.get(props.link)
    }

    async function getid(movieId)
    {
        const API_KEY = "c4e764b9bc20c607857c740abf0e9918";
        let url=`http://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;
        const result =  await axios.get(url);
        const youtubeKey = result.data.results[0].key;

        
        document.getElementById("playTrailer").style.display = "block";
        document.getElementById("playTrailerIframe").src= `https://www.youtube.com/embed/${youtubeKey}`;
    }

    

    return(
        <>
            <div className='row'>
                <h4 className='text-white'>{props.heading}</h4>
                <div className={(props.big === true) ? 'movieRow big' : 'movieRow'}>
                    {
                        storeVal.map((elem, index) => 
                        {
                            return(
                                <>
                                    <img src={"https://image.tmdb.org/t/p/original"+elem.poster_path} onClick={()=>getid(elem.id)} />   
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
export default DynamicRows