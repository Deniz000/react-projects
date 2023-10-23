import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'


export default function Buttons({color}) {


    return (
        <button className={`${styles.btn} ${styles[`${color}`]}`}>
            button
        </button>
    )
}

