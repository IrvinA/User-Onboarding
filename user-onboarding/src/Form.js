import React from "react";
import styled from "styled-components";

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
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add New User</h2>
                <button disabled={disabled}>Submit</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.age}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
                </div>
                <div className='input'>
                    <h3>User Information</h3>
                    <label>Name
                        <input 
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        />
                    </label>
                    <label>Age
                        <input 
                            value={values.age}
                            onChange={onChange}
                            name='age'
                            type='number'
                            min='1'
                            max='100'
                        />
                    </label>
                    <label>Email
                        <input 
                            value={values.email}
                            onChange={onChange}
                            name='email'
                            type='email'
                        />
                    </label>
                    <label>Password
                        <input 
                            value={values.password}
                            onChange={onChange}
                            name='password'
                            type='password'
                        />
                    </label>
                    <label>Terms of Service
                        <input 
                            checked={values.tos}
                            onChange={onChange}
                            name='tos'
                            type='checkbox'
                        />
                    </label>
                </div>
            </div>
        </form>
    )
}

export default Form