import React from 'react'
import ContactForm from './ContactForm'
import styles from '../../../styles/Home.module.css'
const Contact = () => {
  return (
    <div className={styles.main}>
      <h1 className='text-2xl'>Contact for any query</h1>
      <ContactForm/>
    </div>
  )
}

export default Contact