import React from "react";
import styled from "styled-components";

const StyledH3 = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    color: red;
`

function User({ details }) {
    if (!details) {
        return <StyledH3>Loading User Details</StyledH3>
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