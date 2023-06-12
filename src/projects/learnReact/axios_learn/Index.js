// PREP DEFINED
import React, { useEffect } from 'react'
// VIEW
import DynamicRows from "./DynamicRows";
import Banner from './Banner'
import Header from './Header'
// CSS
import './Style.css';
// API
import requests from "./request";
// ICONS
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
function closeIframe()
{
    document.getElementById("playTrailer").style.display = "none";
} 

function Index()
{
    return(
        <div className='netflix'>
            <Header />
            <Banner />
            <DynamicRows link={requests.fetchTrending} heading="Trending" big = {true}/>
            <DynamicRows link={requests.fetchNetflixOriginals} heading="NetflixOriginals"/>
            <DynamicRows link={requests.fetchTopRated} heading="TopRated"/>
            <DynamicRows link={requests.fetchActionMovies} heading="ActionMovies"/>
            <DynamicRows link={requests.fetchComedyMovies} heading="ComedyMovies"/>
            <DynamicRows link={requests.fetchHorrorMovies} heading="HorrorMovies"/>
            <DynamicRows link={requests.fetchRomanceMovies} heading="RomanceMovies"/>
            <DynamicRows link={requests.fetchDocumentaries} heading="Documentaries"/>
            <div id='playTrailer' style={{display: "none", width:"1000px", height:"600px", backgroundColor:"black", position:"fixed", top:50, left:250, borderRadius:"10px"}}>
                <div className='text-white text-end border rounded bo p-2'> <span onClick={()=> closeIframe(this)}><b><CancelIcon/></b></span> </div>
                <iframe id='playTrailerIframe' src="" title="W3Schools Free Online Web Tutorials" style={{width:"100%",height:"100%"}}></iframe>
            </div>
        </div>    
        
    )
}
export default Index