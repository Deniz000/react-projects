import React from 'react'
import Buttons from '../../components/Button/Button'
import styles from './Home.module.css'
import Projects from '../Projects/Projects';

export default function Home() {
  return (
    <>
    <div className={`${styles.side}`}>
      <section className={`${styles.leftSide}`}>
      <h1>Hi There,</h1>
      <h2>I'm Güldeniz Özdemir</h2>
      <p>I' into software</p>
      <Buttons color={'secondary'} size={'large'} innerText={'About Me'}></Buttons>
      </section>

      <section>
        <img src='/images/admin.jpg' alt='me' className={`${styles.adminImg}`}/>
      </section>
    </div>
    <div className={`${styles.projects}`}>
    <Projects />
    </div>
    </>
  )
}
