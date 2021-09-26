import React from 'react';


const Cart = (props) => {



    const { team } = props
    let total = 0;
    let name = ''
    for (const men of team) {
        total = total + men.point
        name = name + ", " + men.name

    }
    return (
        <div>
            <h1 className="text-white">Added Man</h1>
            <h4>Added Quantity: {team.length} Man</h4>
            <h3>Total Point:{total}</h3>
            <h3>Added Man:{name}</h3>
        </div>
    );
};

export default Cart;