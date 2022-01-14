import React,{useState} from 'react'
import MovieCard from "./MovieCard.js"
import {Navbar,Nav,NavDropdown,Container,Row,Col,InputGroup,FormControl,Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const MovieList = () => {

    const [list, setList] = useState([
        {posterURL:"https://i5.walmartimages.com/asr/9ab25da7-1863-47ec-b256-bef7f0b384d6_1.eff76dd1d07d4d50c798b93b306f5f64.jpeg",title:"Titanic",description:"Sinked ship",rating:5,id:1},
        {posterURL:"https://fr.web.img5.acsta.net/pictures/21/05/18/10/40/2487837.jpg",title:"Fast and furious",description:"Drifing",rating:0,id:2},
        {posterURL:"https://static.kino.de/wp-content/uploads/2010/08/House-of-Gucci-Poster-2021-rcm400x400u.jpg",title:"Twilight",description:"vampires",rating:0,id:3},
    ])

const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [posterURL, setPosterURL] = useState("")
const [rating, setRating] = useState()





const addMovie = ()=>{
    setList([...list, {posterURL,title,description,rating}])
}

const [searchParam, setSearchParam] = useState('')
const [searchRating, setSearchRating] = useState()


const search = (movies) => {
    return movies.filter(el =>{
       return el.title.toLowerCase().includes(searchParam.toLowerCase())
    })
}

const searchRate = (movies) => {
    if(!searchRating){
        return movies
    }
    return movies.filter(el =>{
       return el.rating <= searchRating
    })
}

    return (
        <div>
            
            <Row>
                <Col xs={12} sm={12} md={12} >
                <span>Search</span>
                <input type='text' value={searchParam} onChange={(e)=>setSearchParam(e.target.value)} />
                </Col>
                <Col xs={12}  sm={12}  md={12} >
                    <span>Rating</span>
                    <input type='number' value={searchRating} onChange={(e)=>setSearchRating(e.target.value)} />
                </Col>
            </Row>

        <Row>
            <Col xs={12} sm={6} md={8} >
            <div className='movieList'>
            {searchRate(search(list)).map((el)=>(
                <MovieCard data={el}/>
            ))}
            </div>
            </Col>
            <Col xs={12}  sm={6}  md={4} >
            <fieldset>
              <legend>Add Movie</legend>
              <div className="addForm">
                <input type="text" placeholder='title' style={{width: "100%" }} className="mb-3 " value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input type="text" placeholder='description'  style={{width: "100%" }} className="mb-3 " value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <input type="text" placeholder='img' style={{width: "100%" }} className="mb-3 " value={posterURL} onChange={(e)=>setPosterURL(e.target.value)}/>
                <input type="text" placeholder='rating' style={{width: "100%" }} className="mb-3 "  value={rating} onChange={(e)=>setRating(e.target.value)}/>
                </div>
                <Button variant="primary"  onClick={addMovie}>Add Movie</Button>
            </fieldset>
            </Col>
          </Row>


          
        </div>
    )
}

export default MovieList
