import React from 'react';
import { ErrorMessage, Field, useField } from 'formik';
import './TextField.css';

export const TextField = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className = 'field'>
      <h2>{props.label}</h2>
      <input className = 'inputField' {...field} {...props}>
        </input>
    </div>
  )
}