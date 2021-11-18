import React from "react";
import { Formik } from 'formik';
import {Form, Button, Row, Col} from 'react-bootstrap';
import * as Yup from 'yup';
import '../Form/YogaForm.css';

export default function PaymentForm(){
    const validation = Yup.object({
        name: Yup.string()
            .required('*Required'),
        email: Yup.string()
            .email('*Please enter a valid email')
            .required('*Required')
    })
    return(
        <Formik
            initialValues = {{
                    name : '',
                    email : ''
                }}
                validationSchema = {validation}
                >
            {
                ({values,
                handleChange,
                handleBlur,
                touched,
                errors}) => (
                    <div className='preview'>
                        <h1>Payment Details</h1>
                        <Form >
                            <Form.Group className='mb-3' controllId = 'formName'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                name = 'name'
                                value = {values.name}
                                placeholder = "Enter your name"
                                onChange = {handleChange}
                                onBlur = {handleBlur}
                                className = {touched.name && errors.name ? 'error' : null}
                                />
                                { touched.name && errors.name ? 
                                    (<div className="error-message">{errors.name}</div>)
                                    : null}
                            </Form.Group>
                            <Form.Group className='mb-3' controllId = 'formEmail'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                name = 'email'
                                value = {values.email}
                                placeholder = "Enter your email id"
                                onChange = {handleChange}
                                onBlur = {handleBlur}
                                className = {touched.email && errors.email ? 'error' : null}
                                />
                                { touched.email && errors.email ? 
                                    (<div className="error-message">{errors.email}</div>)
                                    : null}
                            </Form.Group>
                            <Button variant="danger">Enter</Button>
                        </Form>
                    </div>
                )
            }
        </Formik>
    )
};