import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Men from "../Men/Men";
import "./Mens.css"



const Mens = () => {

    const [mens, setmens] = useState([])
    const [team, setTeam] = useState([])

    useEffect(() => {
        fetch('./mens.JSON')
            .then(res => res.json())
            .then(data => setmens(data))
    }, [])


    const addToTeam = (gretestMan) => {

        const newTeam = [...team, gretestMan]
        setTeam(newTeam)
    }

    return (
        <div className="mens-part">
            <div className="men-part">
                {
                    mens.map(men =>
                        <Men
                            key={men.rank}
                            men={men}
                            addToTeam={addToTeam}
                        >
                        </Men>
                    )
                }
            </div>
            <div className="cart-part text-white text-center">
                <Cart
                    team={team}
                ></Cart>
            </div>
        </div>
    );
};

export default Mens;