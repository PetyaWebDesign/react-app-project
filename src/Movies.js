function MoviesList (props) {
const movies = props.allMovies

const moviesItems = movies.map((movie, index) => {
    return <li key = {index}>{movie}</li>
})

console.log(moviesItems)
    return(
        <section>
            <h2>Movies list component</h2>
            {moviesItems}
        </section>
 
    )
}

export default MoviesList;