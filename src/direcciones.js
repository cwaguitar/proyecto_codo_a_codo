
const API_KEY = '1faca7ddea3af75397e7301d673942a2';

const direcciones = {

    buscarTrending: `/trending/all/week?api_key=${API_KEY}`,
    buscarNetflixOriginals:`/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    buscarTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    buscarActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    buscarComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    buscarHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    buscarRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    buscarDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,


}

export default direcciones;