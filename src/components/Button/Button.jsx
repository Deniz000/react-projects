import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'


export default function Buttons({color, size, innerText}) {



    return (
        <button  className={`${styles.btn} ${styles[color]} ${styles[size]}`}>
            {innerText}
        </button>
    )
}

