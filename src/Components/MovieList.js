import React,{useState} from 'react'
import MovieCard from "./MovieCard.js"

const MovieList = () => {

const [list, setList] = useState([
    {posterURL:"logo192.png",title:"Titanic",description:"Sinked ship",rating:5},
    {posterURL:"logo192.png",title:"Fast and furious",description:"Drifing",rating:0},
    {posterURL:"logo192.png",title:"Twilight",description:"vampires",rating:0},
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
            <div className="addForm">
                <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
                <input type="text" placeholder='description' value={description} onChange={(e)=>setDescription(e.target.value)} />
                <input type="text" placeholder='img' value={posterURL} onChange={(e)=>setPosterURL(e.target.value)} />
                <input type="text" placeholder='rating' value={rating} onChange={(e)=>setRating(e.target.value)} />
                <button onClick={addMovie}>Add movie</button>
            </div>
            <span>Search</span>
            <input type='text' value={searchParam} onChange={(e)=>setSearchParam(e.target.value)} />
            <span>Rating</span>
            <input type='number' value={searchRating} onChange={(e)=>setSearchRating(e.target.value)} />

            <div className='movieList'>
            {searchRate(search(list)).map((el)=>(
                <MovieCard data={el}/>
            ))}
            </div>
        </div>
    )
}

export default MovieList
