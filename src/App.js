import './App.css';
import MovieList from './Components/MovieList';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Moviedetail from './Components/MovieDetail'; 

function App() {
  return (
    <div>
      <Router> 
      
        <Routes> 

          <Route path = "/detail/:ID" element ={ <Moviedetail/>}  /> 
          <Route path = "/list" element ={ <MovieList/>}  /> 

        
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
