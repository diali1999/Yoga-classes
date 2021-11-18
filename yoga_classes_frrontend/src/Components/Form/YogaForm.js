import React from 'react';
import { Formik } from 'formik';
import {Form, Button, Row, Col} from 'react-bootstrap';
import "./YogaForm.css";
import * as Yup from 'yup';

export default function YogaForm() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, '*Must be 15 characters or less')
      .required('*Required'),
    lastName: Yup.string()
      .max(20, '*Must be 20 characters or less')
      .required('*Required'),
    email: Yup.string()
      .email('*Email is invalid')
      .required('*Email is required'),
    age: Yup.number()
      .min(18, "*Age  must at least 18")
      .max(65, '*Age can be maximum 65')
      .required('*Age is required'),
    phone_no: Yup.string()
    .matches(/[6-9]+[0-9]{9}/, "*Enter valid phone number")
    .required("*Please enter phone number"),
    address: Yup.string()
       .required('*Address is required'),
    batch: Yup.string()
      .required("*Please select a batch"),
    gender: Yup.string()
      .required('*Please enter gender')
  });
  return (
    <Formik
      initialValues= {{
        firstName : '',
        lastName : '',
        email : '',
        gender : '',
        age : 18,
        phone_no : '',
        batch : '',
        address : '',
      }}
      validationSchema={validate}
      onSubmit={(values, {setSubmitting, resetForm}) => {
        setSubmitting(true);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 500);
    }}
    >
      {(
        {values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting
      }
      ) => (
        <div className='preview'>
          {console.log(values)}
        <h1>Yoga Online Registration Form</h1>
        <hr/>
          <Form onsubmit = {handleSubmit} className="mx-auto">
                <Form.Group className="mb-3" controlId = 'formFirstName'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control 
                        type="text" 
                        placeholder="Enter First Name" 
                        name = "firstName"
                        onChange = {handleChange}
                        onBlur={handleBlur}
                        value = {values.firstName}  
                        className={touched.firstName && errors.firstName ? "error" : null}  
                        />
                        {touched.firstName && errors.firstName ? (
                            <div className="error-message">{errors.firstName}</div>
                          ): null}
                </Form.Group>
                <Form.Group className="mb-3" controlId = 'formLastName'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control 
                        type="text" 
                        placeholder="Enter Last Name" 
                        name = "lastName" 
                        onChange = {handleChange}
                        value = {values.lastName}
                        onBlur={handleBlur}
                        className={touched.lastName && errors.lastName ? "error" : null}   
                        />
                        {touched.lastName && errors.lastName ? (
                            <div className="error-message">{errors.lastName}</div>
                          ): null}
                </Form.Group>
            <Form.Group className="mb-3" controlId = 'formEmail'>
                  <Form.Label>Email id</Form.Label>
                  <Form.Control 
                        type="text" 
                        placeholder="Enter Email id" 
                        name = "email" 
                        onChange = {handleChange}
                        onBlur={handleBlur}
                        value = {values.email}   
                        className={touched.email && errors.email ? "error" : null}
                        />
                        {touched.email && errors.email ? (
                            <div className="error-message">{errors.email}</div>
                          ): null}
                </Form.Group>
                <Form.Group className="mb-3" controlId = 'formGender'>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control 
                        as ="select" 
                        placeholder="Enter Gender" 
                        name = "gender" 
                        onChange = {handleChange}
                        value = {values.gender}
                        onBlur={handleBlur}  
                        className={touched.gender && errors.gender ? "error" : null}
                      >
                    <option hidden selected value > -- select an option -- </option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="T">None of the above</option>
                    </Form.Control>
                    {touched.gender && errors.gender ? (
                            <div className="error-message">{errors.gender}</div>
                          ): null}
                </Form.Group>
                <Form.Group className="mb-3" controlId = 'formAge'>
                  <Form.Label>Age</Form.Label>
                  <Form.Control 
                        type="number" 
                        placeholder="Enter your age" 
                        name = "age" 
                        onChange = {handleChange}
                        value = {values.age}
                        onBlur={handleBlur}
                        className={touched.age && errors.age ? "error" : null}   
                        />
                        {touched.age && errors.age ? (
                            <div className="error-message">{errors.age}</div>
                          ): null}
                </Form.Group>
                <Form.Group className="mb-3" controlId = 'formphoneNumber'>
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control 
                        type="text" 
                        placeholder="Enter Phone number" 
                        name = "phone_no" 
                        onChange = {handleChange}
                        value = {values.phone_no}
                        onBlur={handleBlur} 
                        className={touched.phone_no && errors.phone_no ? "error" : null}  
                        />
                        {touched.phone_no && errors.phone_no ? (
                            <div className="error-message">{errors.phone_no}</div>
                          ): null}
                </Form.Group>
                <Form.Group className="mb-3" controlId = 'formAddress'>
                  <Form.Label>Address</Form.Label>
                  <Form.Control 
                        type="text" 
                        placeholder="Enter Address" 
                        name = "address"
                        onChange = {handleChange}
                        onBlur={handleBlur}
                        value = {values.address} 
                        className={touched.address && errors.address ? "error" : null}   
                        />
                        {touched.address && errors.address ? (
                            <div className="error-message">{errors.address}</div>
                          ): null}
                </Form.Group>
                <Form.Group className="mb-3" controlId = 'formBatch'>
                  <Form.Label>Select Batch</Form.Label>
                  <Form.Control 
                        as ="select" 
                        placeholder="Select Batch" 
                        name = "batch"
                        onChange = {handleChange}
                        value = {values.batch} 
                        onBlur={handleBlur}   
                        className={touched.batch && errors.batch ? "error" : null}
                      >
                    <option hidden selected value > -- select an option -- </option>
                    <option >6-7 am</option>
                    <option >7-8 am</option>
                    <option >8-9 am</option>
                    <option >5-6 pm</option>
                    </Form.Control>
                    {touched.batch && errors.batch ? (
                            <div className="error-message">{errors.batch}</div>
                          ): null}
                </Form.Group>
                <Button  className="btn" variant="danger" type="submit" disabled
                = {isSubmitting}>Register</Button>
          </Form>
          
          </div>
      )
    }
    </Formik>
  )
};
