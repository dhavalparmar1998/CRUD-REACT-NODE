import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Formik } from 'formik';
import * as Yup from 'yup';
import fetchFunction from '../utilities/fetchFunction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Add() {
    const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
        <h1> Add User </h1>
        <Formik

initialValues={{ name: '', age: '', place: '' }}

validationSchema={Yup.object({

  name: Yup.string()

    .min(2, 'Must be 2 characters or more')

    .required('Required'),

  age: Yup.string()

    .required('Required'),

  place: Yup.string().required('Required'),

})}

onSubmit={(values, { setSubmitting }) => {

  setTimeout(() => {

    // alert(JSON.stringify(values, null, 2));
    var extra = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(values)
    }
    fetchFunction("/crud",extra)
    .then((res)=>{
        console.log(res);
        console.log(res.message);

        toast(res.message);
        navigate("/");
        
    })

    setSubmitting(false);

  }, 400);

}}

>

{formik => (

  <form onSubmit={formik.handleSubmit}>

    <label htmlFor="name">First Name</label>

    <input
        className='form-control'

      id="name"

      type="text"

      {...formik.getFieldProps('name')}

    />

    {formik.touched.name && formik.errors.name ? (

      <div>{formik.errors.name}</div>

    ) : null}


    <br />

    <label htmlFor="age">Age</label>

    <input
     className='form-control'

      id="age"

      type="text"

      {...formik.getFieldProps('age')}

    />

    {formik.touched.age && formik.errors.age ? (

      <div>{formik.errors.age}</div>

    ) : null}

    <br />

    <label htmlFor="place">place</label>

    <input  className='form-control' id="place" type="place" {...formik.getFieldProps('place')} />

    {formik.touched.place && formik.errors.place ? (

      <div>{formik.errors.place}</div>

    ) : null}


    <br />
    <button type="submit">Submit</button>

  </form>

)}

</Formik>
    </Container>
  );
}

export default Add;