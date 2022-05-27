
import axios from "axios";

const call = axios.create ({

    baseURL : "https://api.themoviedb.org/3",
});

export default call;



































//import CarrouselOne from "./CarrouselOne";

/*const CallOne = () => {

    const [movies,setMovies] = useState([])

    const API_KEY = '1faca7ddea3af75397e7301d673942a2';

    useEffect(() => {

        axios.get('https://api.themoviedb.org/3/movie/550?api_key=1faca7ddea3af75397e7301d673942a2')
        
        .then(res => {

            console.log(res.data)

            setMovies([res.data])

            
           
        })
        .catch (err => {

            console.log(err)
        })
        
    }, [])

    return (

    <div>

    <ul>
        {
            movies.map( movie =>(  

                <CarrouselOne  id ={movie.id} homepage = {movie.homepage} img = {movie.poster_path} title = {movie.original_title} overview = {movie.overview}/>
                     
               )
       )}
    
    </ul>

    </div>
    )

    
}

export default CallOne  */

