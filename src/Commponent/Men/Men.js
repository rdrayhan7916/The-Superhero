import React from 'react';
import "./Men.css"
const Men = (props) => {
    console.log(props.men)
    const { rank, name, occupation, image, influence, point } = props.men
    return (
        <div className="border border-2 shadow p-3 mb-5 bg-body rounded mens-details">
            <div>
                <img className="w-100" src={image} alt="" />
            </div>
            <div className="men-details text-center">
                <h1>{rank}</h1>
                <h3>{name}</h3>
                <h4>{occupation}</h4>
                <h5>{influence}</h5>
                <h3> Point: {point}</h3>
                <button
                    onClick={() => props.addToTeam(props.men)}
                    className="btn-regular"

                ><i class="fas fa-cart-plus"></i> add to team </button>
            </div>
            <div className="d-flex justify-content-evenly mt-2">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square "></i>
            </div>
        </div>
    );
};

export default Men;