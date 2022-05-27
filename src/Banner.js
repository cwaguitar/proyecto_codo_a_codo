import axios from 'axios';
import React, { useState, useEffect } from 'react';
import call from './call';
import direcciones from './direcciones';
import './Banner.css'

const Banner = () => {

    const [banMovie, setBanMovie] = useState([]);


    useEffect(() => {

        async function fetchData() {
            
            const request = await call.get(direcciones.buscarNetflixOriginals)

              setBanMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)
              
              ]);

              return request;

    }

    fetchData()
    
    }, [])

    console.log(banMovie)

  return (
    <header className='banner'
    
    style ={{

      backgroundSize: "cover",
      backgroundImage: `url("http://image.tmdb.org/t/p/original/${banMovie?.backdrop_path}")`,
      backgroundPosition: "center center"
      
    }}>  
     {/*Background image */}

    <div className='banner_content'>

   <h1 className='banner__title'>{banMovie?.title || banMovie?.name || banMovie?.original_name }</h1>

   <div className='banner_buttons'>

     <button className="banner_button">Play</button>
     <button className="banner_button">My List</button>

   </div>

   <h1 className="banner_description">{banMovie?.overview}</h1>

    {/*title*/} 

    {/*div + 2 button*/}

     {/*description*/ }

    </div>

       

    


    </header>
  )
}

export default Banner

//Math random Formula :   Math.floor(Math.random() * request.data.results.length -1)