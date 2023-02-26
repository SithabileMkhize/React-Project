import React from "react";
import serena from "../assets/serena-williams.jpg"
import simone from "../assets/simone-biles.jpg"
import shellyann from "../assets/shelly-Ann.jpg"

const AthleteSection = () => {
    let athletes = [
    {
        athleteimage: 'serena-williams.jpg',
        athletename: 'Serena Williams',
        athletesport: 'Tennis'
    },
    {
        athleteimage: 'simone-biles.jpg',
        athletename: 'Simone Biles',
        athletesport: 'Gymnastics'
    },
    {
        athleteimage: 'shelly-Ann.jpg',
        athletename: 'Shelly-Anne Fraser-Pryce',
        athletesport: 'Athletics'
    },
]
    return (
        <section className="athlete-section">
                <div className="athlete-list">
                    {
                        athletes.map((athletes, idx) => {
                            return(<AthleteItem />)
                        })
                    }
                </div>
        </section> 
    )
}

export default AthleteSection
