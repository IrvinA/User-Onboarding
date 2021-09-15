import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Please type in a name')
        .min(1, 'Name field cannot be empty'),
    email: yup
        .string()
        .email('Must enter a valid email')
        .required('Please enter a valid email'),
    password: yup
        .string()
        .required('Please type in a password')
        .min(8, 'Must be at least 8 characters long'),
    tos: yup
        .bool()
        .oneOf([true], 'Accept Terms of Service is required')
})

export default formSchema;