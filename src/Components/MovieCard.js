import React from 'react'
import {Link } from 'react-router-dom'
import {Navbar,Nav,NavDropdown,Container,Row,Col,InputGroup,FormControl,Card,Button} from 'react-bootstrap'
const MovieCard = ({data}) => {
    let {posterURL,title,description,rating,id} = data
    return (
        <div>

        

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={posterURL} style={{ height: '18rem' }}/>
                <Card.Body>
                    <Card.Title>Title :{title} </Card.Title> 
                    <Card.Title>Rating : {rating}</Card.Title> 
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Link to = { `/detail/${data.id}`} > <Button variant="primary">Detail</Button> </Link> 
                   
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
