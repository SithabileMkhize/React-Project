import React, {useState, useEffect} from "react";
import serena from "../assets/serena-williams.jpg"
import Header from "../components/Header";

const Athlete = () => {
    const { id } = useParams()
    const [plays, setPlays] = useState(20)
    const [currAthlete, setCurrAthlete]  = useStat({})

    const Athletes = [
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

    useEffect(() => {
        console.log("loaded")
    }, [])

    // let currAthlete = Athletes[+id]

    if (!currAthlete) {
        return (
            <><Navigate to="/"/></>
        )
    }

    return (
        <main>
            <Header />
            <section className="athlete-section">
                <a href="">
                    <div className="athlete-list">
                        <div className="athlete-item">
                            <img src={athlete.athleteimage} alt="" />
                            <h3>{athlete.athletename}</h3>
                            <h4>{athlete.athletesport}</h4>
                        </div>
                    </div>
                </a>
            </section>
        </main>
    )
}

export default Athlete 