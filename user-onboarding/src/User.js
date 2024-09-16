import React from "react";
import styled from "styled-components";

const StyledH3 = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    color: red;
`

const StyledDiv = styled.div`
    text-align: center;
    margin-bottom: 5%;
    h2 {
        font-size: 2rem;
        border-bottom: 1px solid black;
        width: 30%;
        margin-left: 35%;
        text-shadow: 1px 1px lime;
    }
    p {
        background-color: lightgray;
        color: lime;
        font-weight: 600;
        text-shadow: 1px 1px black;
        margin: 0 35%;
        padding: 2% 0;
        font-size: 1.5rem;
    }
`

function User({ details }) {
    if (!details) {
        return <StyledH3>Loading User Details</StyledH3>
    }

    return (
        <StyledDiv>
            <h2>{details.name}</h2>
            <p>Age: {details.age}</p>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
        </StyledDiv>
    )
}

export default User