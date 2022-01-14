import React from 'react'
import { useParams } from 'react-router-dom'

const Moviedetail = () => {
    const {ID}=useParams()
console.log (ID);
const x =[
    {posterURL:"https://i5.walmartimages.com/asr/9ab25da7-1863-47ec-b256-bef7f0b384d6_1.eff76dd1d07d4d50c798b93b306f5f64.jpeg",title:"Titanic",description:"Sinked ship",rating:5,id:1},
    {posterURL:"https://fr.web.img5.acsta.net/pictures/21/05/18/10/40/2487837.jpg",title:"Fast and furious",description:"Drifing",rating:0,id:2},
    {posterURL:"https://static.kino.de/wp-content/uploads/2010/08/House-of-Gucci-Poster-2021-rcm400x400u.jpg",title:"Twilight",description:"vampires",rating:0,id:3},
];
const selectedpost = x.find ( x => x.id ==ID );
console.log (selectedpost)
    return (
        <div>
           <div>

 <img  src={selectedpost.posterURL} />
 <h4> {selectedpost.title} </h4>
 <p>{selectedpost.description}</p>
 <span>{selectedpost.rating}</span>
</div>

        </div>
    )
}

export default Moviedetail
