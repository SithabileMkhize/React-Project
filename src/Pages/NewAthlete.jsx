import React from "react";
import AthleteForm from "../components/AthleteForm";
import Header from "../components/Header";

const NewAthlete = () => {
    return (
        <>
            <Header /> 
            <section className="new-athlete-section">
                <AthleteForm />
            </section>
        </>
    )
}

export default NewAthlete