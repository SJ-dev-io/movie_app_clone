import React, {useState, useEffect} from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css';


const Home = () => {
    const [movies,setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        try {
            const {
                data: {
                    data: {movies}
                }
            } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
            setMovies(movies);
        } catch (e) {
            console.error(e);
        };
        setIsLoading(false);
    };


    return (

        <section className="container">
            {isLoading ? (
                <div className="loader">
                    <span className="loader_text">Loading... </span>
                </div>
            ) : (
                <div className="movies">
                    {movies.map(movie => (
                        <Movie
                            key={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Home;