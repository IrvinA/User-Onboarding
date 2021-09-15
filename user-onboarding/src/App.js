import React, { useState, useEffect } from 'react';
import Form from './Form';
import schema from './formSchema';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 4rem;
  text-shadow: 2px 2px 4px lime;
`

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}
const initialErrors = {
  name: '',
  email: '',
  password: '',
  tos: '',
}
const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data);
      }).catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res.data);
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      }).catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    }
    postNewUser(newUser);
  }

  useEffect(() => { getUsers() }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
   <div>
     <StyledH1>New User Registration</StyledH1>

     <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
     />

     {
       users.map(user => {
         return (
           <User key={user.id} details={user} />
         )
       })
     }
   </div> 
  )
}

export default App;
