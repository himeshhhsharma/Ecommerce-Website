import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
// import {findInputError, isFormValid} from '../utils'


const validate = values => {
  const errors = {};
  if (!values.fname) {
    errors.fname = 'Required';
  } else if (values.fname.length > 7) {
    errors.fname = 'Must be 10 characters or less';
  }

  if (!values.lname) {
    errors.lname = 'Required';
  } else if (values.lname.length > 20) {
    errors.lname = 'Must be 10 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.mssg) {
    errors.email = 'Required';
  } else if (values.mssg.length < 10 || values.mssg.length > 25) {
    errors.email = 'Must be less than 20 characters and more than 10 characters';
  }

  return errors;
};

const contactSchema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("Email id is required."),
  fname:Yup.string().min(3, 'Minimum 3 letters').required("First name is required")
})

const FormPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      fname: '',
      lname: '',
      mssg: ''
    },
    validationSchema:contactSchema,
    onSubmit: values => {
      console.log(values)
    },
  });
  return (
    <>
      <form action="#" onSubmit={formik.handleSubmit}>
        <label htmlFor='fname'>Name<span style={{ color: "red" }}>*</span></label>
        <div className='contact-page-name-flex'>
          <div className='contact-page-name-flex-c'>
            <input
              className='label-inline-inp'
              type="text"
              id="fname"
              name="fname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fname} />
            {formik.touched.fname && formik.errors.fname ? (
              <div>{formik.errors.fname}</div>
            ) : null}



            <label htmlFor="fname" id="label-inline" >First Name</label>
          </div>
          <div className='contact-page-name-flex-c'>
            <input
              className='label-inline-inp'
              type="text"
              id="sname"
              name="lname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lname}
            />
            {formik.touched.lname && formik.errors.lname ? (
              <div>{formik.errors.lname}</div>
            ) : null}

            <label htmlFor="sname" id="label-inline">Last Name</label>
          </div>

        </div>
        <label htmlFor="emai">Email<span style={{ color: "red" }}>*</span></label>
        <input type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}


        <label htmlFor="mssg">Message</label>
        <textarea name="mssg"
          id="mssg"
          cols="30"
          rows="5"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mssg}></textarea>

        {formik.touched.mssg && formik.errors.mssg ? (
          <div>{formik.errors.mssg}</div>
        ) : null}


        <button type='submit' className='red-btn contact-send'>Submit</button>
      </form>
    </>
  )
}

export default FormPage