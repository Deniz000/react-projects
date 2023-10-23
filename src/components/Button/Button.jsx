import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'


export default function Buttons({color, size}) {


    return (
        <button className={`${styles.btn} ${styles[color]} ${styles[size]}`}>
            button
        </button>
    )
}

