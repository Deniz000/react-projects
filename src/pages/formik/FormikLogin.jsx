import React from 'react'
import { useFormik } from 'formik'
import './style.css'

export default function FormikLogin() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmBox: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (

        <section className='form-container'>
            <img className='logo' src='images/logo.png'/>
            <form onSubmit={formik.handleSubmit} className='form-members'>
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
                <label htmlFor="confirmBox">Beni Hatırla</label>

                <input
                className='confirm_box'
                    id="confirmBox"
                    name="confirmBox"
                    type="checkbox"
                    onChange={formik.handleChange}
                    value={formik.values.confirmBox}
                />
                <button className='submit-btn' type="submit">Login</button>
            </form>
        </section>
    );
}
