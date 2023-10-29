import { useState } from "react";

function singleMenuComponent(props){
    return(
        <div className="name">

        </div>
    )
}

export default function Horror(){
const [movies , setMovies] = useState()
const getMovie = (Horror) => {
    console.log('called function')
    fetch(`https://api.sampleapis.com/movies/${Horror}`)
    .then(res => res.json())
    .then(data => setMovies(data))
    .catch(err => console.error(err))
}
return(
    <main>
        <div>
            <button onClick={() => getMovie('horror')}>
            🎃Movies🎃
            </button>
        </div>
        <section>
            {movies && movies.map(movie => (
                <div key={movie.id} className="movie-card">
                    <img src={movie.posterURL} alt={movie.title} />
                    <h2> {movie.title} </h2>
                </div>
            ))}
        </section>
    </main>
)
}
