import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    margin-bottom: 5%;
    .title {
        display: flex;
        justify-content: space-between;
        background-color: lightgrey;
        margin: 0 20%;
        border-radius: 10px;
    }
    h2 {
        line-height: 2rem;
        color: lightblue;
        text-shadow: -1px -1px white;
        font-size: 1.8rem;
        background-color: black;
        width: 25%;
        text-align: center;
        margin-left: 5%;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        padding: 5%;
    }
    button {
        padding:  0 4%;
        margin: 5% 5% 5% 0;
        color: lightgreen;
        letter-spacing: 1.1px;
        font-size: 1rem;
        text-shadow: -1px -1px white;
        background-color: black;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        &:hover {
            background-color: white;
            color: firebrick;
            text-shadow: 1px 1px black;
            transition: all 1s;
        }
    }
    .errors {
        margin: 0 10%;
        color: red;
        background-color: black;
        text-shadow: 1px 1px red;
        font-size: 2rem;
        text-align: center;
        font-weight: 600;
    }
    .input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h3 {
        font-size: 1.5rem;
        border: 1px solid black;
        padding: 1% 3%;
        font-weight: 700;
        text-shadow: 1px 1px black;
        border-bottom-right-radius: 20px;
        border-top-left-radius: 20px;
        background-color: lightgrey;
    }
    
    label {
        text-shadow: 1px 1px lime;
        font-weight: 600;
        text-align: center;
    }
    input {
        width: 100%;
    }
`

function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse)
    }

    return (
        <StyledForm onSubmit={onSubmit}>
            <div>
                <div className='title'>
                    <h2>Add New User</h2>
                    <button id='button' disabled={disabled}>Submit</button>
                </div>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.age}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
                </div>
                <div className='input'>
                    <h3>User Information</h3>
                    <label><h4>Name</h4>
                        <input 
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        />
                    </label>
                    <label><h4>Age</h4>
                        <input 
                            value={values.age}
                            onChange={onChange}
                            name='age'
                            type='number'
                            min='1'
                            max='100'
                        />
                    </label>
                    <label><h4>Email</h4>
                        <input 
                            value={values.email}
                            onChange={onChange}
                            name='email'
                            type='email'
                        />
                    </label>
                    <label><h4>Password</h4>
                        <input 
                            value={values.password}
                            onChange={onChange}
                            name='password'
                            type='password'
                        />
                    </label>
                    <label><h4>Terms of Service</h4>
                        <input 
                            checked={values.tos}
                            onChange={onChange}
                            name='tos'
                            type='checkbox'
                        />
                    </label>
                </div>
            </div>
        </StyledForm>
    )
}

export default Form