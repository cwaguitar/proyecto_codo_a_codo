import React, { useState, useEffect } from 'react';
import call from "./call";
import './caja.css';

const base_url ="http://image.tmdb.org/t/p/original/";

const Caja   = ({title,fetchUrl,posterType})  =>  {

    const [movies,setMovies] = useState([]);

    useEffect(() => {
      
      async function fetchData() {

        const request = await call.get(fetchUrl);  // le pasamos la propiedad con los llamados

        //console.log(request.data.results);
        setMovies(request.data.results)
        return request;
      }
  
      fetchData();

    }, [fetchUrl])

    //console.log(movies)
    
  return (

<div className='caja'>  {/*container principal */ }

    <h2>{title}</h2>,

    <div className='caja__posters'> {/* contenedor de posters */}

    {
      movies.map(movie => (

          <img key ={movie.id} 
          className={`caja__poster ${posterType && "caja__posterType" }`}
          src={`${base_url}${posterType ? movie.poster_path : movie.backdrop_path }` } alt ={movie.name}  />

      ))
    }

    </div>
    

</div>
    
  )
}

export default Caja