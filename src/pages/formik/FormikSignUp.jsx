import React from 'react'
import { useFormik } from 'formik'
import './style.css'
import validationSchema from './validations.js';

export default function FormikSignUp() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      gender: '',
      confirmBox: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema
  });
  return (
    <section className='form-container'>
      <img className='logo' src='images/logo.png' alt='logo'/>
      <form onSubmit={formik.handleSubmit}>
        <div className='input-names'>
          <input
            className='input-field'
            id="firstName"
            name="firstName"
            type="text"
            placeholder='First Name'
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <input
            className='input-field'
            id="lastName"
            name="lastName"
            type="text"
            placeholder='Last Name'
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        <input
          className='input-field'
          id="email"
          name="email"
          type="email"
          placeholder='Email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          className='input-field'
          id="password"
          name="password"
          type="password"
          placeholder='Password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <input
          className='input-field'
          id="confirm_password"
          name="confirmPassword"
          type="password"
          placeholder='Confirm Password'
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        <input
          className='input-field'
          id="phone_number"
          name="phoneNumber"
          type="tel"
          placeholder='(xxx) xxx xx xx'
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        <div className='radio-field'>
          <input
            id="female"
            name="gender"
            type="radio"
            onChange={formik.handleChange}
            value={formik.gender}
          />
          <label htmlFor="gender">Female</label>
          <input
            id="male"
            name="gender"
            type="radio"
            onChange={formik.handleChange}
            value={formik.gender}
          />
          <label htmlFor="gender">Male</label>
        </div>
        <button className='submit-btn' type="submit">Submit</button>

        <input
          className='confirm_box'
          id="confirmBox"
          name="confirmBox"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.confirmBox}
        />
        <label htmlFor="confirmBox">.... onaylıyor musunuz?</label>
      </form>
    </section>
  );
}