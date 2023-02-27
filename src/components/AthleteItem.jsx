import React from "react";
import { Link } from "react-router-dom";

const AthleteItem = ({ athlete, idx }) => {
    return (
        <section className="athlete-section">
            <a href="./Pages/Athletes">
                <div className="athlete-list">
                    <div className="athlete-item">
                        <a href={'/Athletes/$(idx)'}>
                            <img src={athlete.athleteimage} alt="" />
                            <h3>{athlete.athletename}</h3>
                            <h4>{athlete.athletesport}</h4>
                        </a>
                    </div>
                </div>
            </a>
        </section>

    )
}

export default AthleteItem