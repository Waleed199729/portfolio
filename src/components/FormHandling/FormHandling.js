import React from 'react'
import { useFormik } from 'formik';
import { FormSchema } from './FormSchema';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormHandle.css'


const FormHandling = () => {

  const formInitialValues = {
    username:'',
    email:'',
    password:'',
    confirmpassword:'',
    option:''
  }

  // const formik = useFormik({
  //   initialValues: formInitialValues,
  //   validationSchema: FormSchema,
  //   onSubmit: (values) => {
  //     console.log(values)
  //     console.log(values.username)
  //     console.log(values.email)
  //   }
  // };
  
  const { handleSubmit, handleChange, values, errors } = useFormik({               //destrucuring of the function
    initialValues: formInitialValues,
    validationSchema: FormSchema,
    onSubmit: (values) => {
      console.log(values)
      console.log(values.username)
      console.log(values.email)
      console.log(values.password)
      console.log(values.confirmpassword)
      console.log(values.option)
    }
  });

    // const [formData, setFormData] = useState({
    //     username: "",
    //     email: "",
    //     occupation: "",
    //     gender: "",
    //     language: [],
    // })

    // const handleSubmit = (event) => {
    //     debugger;
    //     console.log(event);
    // }
                                                                 
  return (
    <>    
    <div className='login-form'> 
    <center><h2> Login Form </h2></center>      
    <Form  className='main-formhandle' onSubmit={handleSubmit}>    
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label> User Name </Form.Label>
        <Form.Control type="username" name="username"   onChange={handleChange}   value={values.username}  placeholder="Enter Username" /> 
      <span style={{color: 'red'}}>{errors.username}</span>
      <br></br> 
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Email </Form.Label>
        <Form.Control type="email"  name="email"     onChange={handleChange}      value={values.email}     placeholder="Enter Email" />
        <span style={{color: 'red'}}>{errors.email}</span>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Password </Form.Label>
        <Form.Control type="password"  name="password"  onChange={handleChange}      value={values.password}     placeholder="Enter your password" />
        <span style={{color: 'red'}}>{errors.password}</span>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label> Confirm Password </Form.Label>
        <Form.Control type="password"  name="confirmpassword"  onChange={handleChange}  value={values.confirmpassword}   placeholder="Enter your password" />
        <span style={{color: 'red'}}>{errors.confirmpassword}</span>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicOccupation">
        <Form.Label> Occupation </Form.Label> <br></br>
        <select  name="option" onChange={handleChange} value={values.option}>
            <option> Choose the Occupation </option>
            <option  > Student </option>
            <option  > Employee </option>
            <option  > other </option>
        </select>
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      
      <Button variant="primary"  type="submit">
        Submit
      </Button>
    </Form>

    </div>
    </>
  )
}

export default FormHandling




// const [text, setText] = useState('');
                                                                 // this is the concept of form handling
// const handleChange = (event) => {
   
//     console.log(event.target.value, event.target.value);
//     setText(event.target.value);
// }


// return (
//     <>
//     <h1>Form Handling</h1>
//     <h4>{text}</h4>
//     <input className='form-control' onChange={handleChange} name='text' ></input>
//     </>
//   )