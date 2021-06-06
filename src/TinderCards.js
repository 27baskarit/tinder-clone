import React, { useState } from 'react'
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'
import { SwipeableDrawer } from '@material-ui/core'

function TinderCards() {
    const [people,setPeople] = useState([
        {
            "name":"Rajini",
            "url":"https://bsmedia.business-standard.com/_media/bs/img/article/2020-01/07/full/1578418256-2796.jpg"
        },
        {
            "name":"Kamal",
            "url":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/Kamal_Haasan_latest_pic.jpeg?S1fWLdVHAO020wkktYjUE0jA5IjqPLPk&size=1200:675"
        },
        {
            "name":"Vijay",
            "url":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202101/BeFunky-collage__5__3_1200x768.jpeg?kX3fGufhZMPSymV951nrTULvXbB4iGhc&size=1200:675"
        },
        {
            "name":"Ajith",
            "url":"https://filmfare.wwmindia.com/content/2021/apr/thalaajith11617710652.jpg"
        },                        
    ])

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
                        <div className="card" style={{ backgroundImage:`url(${person.url})` }}>
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
