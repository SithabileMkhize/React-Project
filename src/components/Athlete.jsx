import React from "react";
import serena from "../assets/serena-williams.jpg"
import simone from "../assets/simone-biles.jpg"
import shellyann from "../assets/shelly-Ann.jpg"


const Athlete = () => {
    let athlete = [
        
    ]
    return (
        <section class="athlete-section">
            <div class="container">
                <div class="athlete-list">
                    <div class="athlete-item">
                        <a href="">
                            <img src={serena} alt="Serena Williams picture"/>
                        </a>
                        <h2 class="athlete-name">Serena Williams</h2>
                        <p class="sport-name">Tennis</p>
                    </div>
                    <div class="athlete-item">
                        <a href="">
                            <img src={simone} alt="Simone Biles picture"/>
                        </a>
                        <h2 class="athlete-name">Simone Biles</h2>
                        <p class="sport-name">Gymnastics</p>
                    </div>
                    <div class="athlete-item">
                        <a href="">
                            <img src={shellyann} alt="Shelly-Ann Fraser-Pryce picture"/>
                        </a>
                        <h2 class="athlete-name">Shelly-Ann Fraser-Pryce</h2>
                        <p class="sport-name">Athletics</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Athlete

let AthleteArray = [{
    image: 'serena-williams.jpg',
    name: 'Serena Williams',
    sport: 'Tennis',
},{
    image: 'simone-biles.jpg',
    name: 'Simone Biles',
    sport: 'Gymnastics',
},{
    image: 'shelly-Ann.jpg',
    name: 'Shelly-Anne Fraser-Pryce',
    sport: 'Athletics',
}]



