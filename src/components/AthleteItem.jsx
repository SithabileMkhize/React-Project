import React from "react";
import AthleteSection from './components/AthleteSection'

const AtheleteItem = ({athletes}) => {
    return (
        <section className="athlete-section">
            <a href="">
                <div className="athlete-list">
                    <div className="athlete-item">
                        <img src={athletes.athleteimage} alt="" />
                        <h3>{athletes.athletename}</h3>
                        <h4>{athletes.athletesport}</h4>
                    </div>
                </div>
            </a>
        </section>

    )
}

export default AthleteItem