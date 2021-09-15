import React from "react";

function User({ details }) {
    if (!details) {
        return <h3>Loading User Details</h3>
    }

    return (
        <div>
            <h2>{details.name}</h2>
            <p>Age: {details.age}</p>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
        </div>
    )
}

export default User