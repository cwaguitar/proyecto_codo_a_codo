import React from 'react';
import Caja from './Caja';
import direcciones from './direcciones';
import Banner from './Banner';

const Netflix = () => {

  return (

      <div className="App">


  <Banner />

  <Caja title ="Netflix Originals" fetchUrl ={direcciones.buscarNetflixOriginals} posterType ={true} />, {/*con posterType modificamos la imagen*/}
  <Caja title ="Trending now" fetchUrl ={direcciones.buscarTrending}/>,
  <Caja title ="Top Rated" fetchUrl ={direcciones.buscarTopRated}/>,
  <Caja title ="Action Movies" fetchUrl ={direcciones.buscarActionMovies}/>,
  <Caja title ="Comedy Movies" fetchUrl ={direcciones.buscarComedyMovies}/>,
  <Caja title ="Horror Movies" fetchUrl ={direcciones.buscarHorrorMovies}/>,
  <Caja title ="Romance Movies" fetchUrl ={direcciones.buscarRomanceMovies}/>,
  <Caja title ="Documentaries" fetchUrl ={direcciones.buscarDocumentaries}/>,

    </div>
  )
}

export default Netflix






/* <CarrouselOne  key={cats} cats ={cats} />

 {

          movies.map((cats) => (

          <h1>{cats}</h1>

          ))
      }  */
