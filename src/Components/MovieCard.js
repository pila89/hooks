import React from 'react'

const MovieCard = ({data}) => {
    let {posterURL,title,description,rating} = data
    return (
        <div>
            <img  src={posterURL} />
            <h4> {title} </h4>
            <p>{description}</p>
            <span>{rating}</span>
        </div>
    )
}

export default MovieCard
