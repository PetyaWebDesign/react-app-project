import logo from './logo.svg';
import './App.css';
import MoviesList from './Movies';

function App() {

const allMovies = ['Peaceful warrior', 'Intersteller', 'The matrix', 'Queen of the south']

    return ( 
        <section>
            {/* <img src={logo}/> */}
            <h1>Hello from React.js</h1>
            <p>some text</p>
            <MoviesList allMovies = {allMovies}/>
        </section>
    );
}

export default App;