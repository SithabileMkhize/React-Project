import React from "react";

const AthleteForm = () => {
    return (
        <>
            <form className="athlete-form">
                <label>Athlete Name:
                    <input type="text" />
                </label>
                <label>Athlete Sport:
                    <input type="text" />
                </label>
                <label>Athlete Image:
                    <input type="image" />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}

export default AthleteForm