import React, { useState, useEffect } from 'react'
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'
import { SwipeableDrawer } from '@material-ui/core'
import axios from './axios'
function TinderCards() {
    
    const [people,setPeople] = useState([])

    useEffect(() => {
        async function fetchdata(){
            console.log(axios)
            const req = await axios.get("/tinder/card")
            setPeople(req.data)
        }
        fetchdata()
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("Name To Delete "+ nameToDelete)
        // setLastDireaction(direction)
    }

    const outOfFrame = (name) =>{
        console.log("Out of screen "+ name)
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards_container">
            {
                people.map((person) => (
                    <TinderCard 
                        key={person.name}
                        className="swipe"
                        onSwipe={(dir) => swiped(dir,person.name)} 
                        onCardLeftScreen={() => outOfFrame(person.name)} 
                        preventSwipe={['up', 'down']}
                    >
                        <div className="card" style={{ backgroundImage:`url(${person.imgUrl})` }}>
                             <h3>{person.name}</h3>
                        </div>
                        
                    
                    </TinderCard> 
                ))
            }
            </div>
        </div>
    )
}

export default TinderCards
