import * as Yup from 'yup';
import { ref } from 'yup';

export const FormSchema = Yup.object ({
    username: Yup.string().min(3, 'Too Short').max(50, 'Too Long').required('Please must enter your name'),            //username is a textbox in the FormHandling.js
    email: Yup.string().email().required('Please must enter your email'),
    password: Yup.string().min(8, 'Weak Password').max(20, 'Strong Password').required('Must be alphenumeric values'),
    confirmpassword: Yup.string().min(8).max(20).required('Please Re-type your password').oneOf([ref("password")], "Passwords does not match")
    
});