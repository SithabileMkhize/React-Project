import React from "react";
import serena from "../assets/serena-williams.jpg"
import simone from "../assets/simone-biles.jpg"
import shellyann from "../assets/shelly-Ann.jpg"
import AthleteItem from "./AthleteItem"


const AthleteSection = () => {
    let athletes = [
    {
        athleteimage: serena,
        athletename: 'Serena Williams',
        athletesport: 'Tennis'
    },
    {
        athleteimage: simone,
        athletename: 'Simone Biles',
        athletesport: 'Gymnastics'
    },
    {
        athleteimage: shellyann,
        athletename: 'Shelly-Anne Fraser-Pryce',
        athletesport: 'Athletics'
    },
]
    return (
        <section className="athlete-section">
                <div className="athlete-list">
                    {
                        athletes.map((athlete, idx) => {
                            return(<AthleteItem key = {idx} athlete = {athlete}/>)
                        })
                    }
                </div>
        </section> 
    )
}

export default AthleteSection
