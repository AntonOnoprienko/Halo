import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import classes from '../styles/contact.module.scss'

export const ContactComponent = () => {
	const [name,setName] = useState('')
	const [email,setEmail] = useState('')

	const changeNameHandler = (event) => {
		setName(event.target.value)
	}
	const changeEmailHandler = (event) => {
		setEmail(event.target.value)
	}
	const handleSubmit = () => { 
		event.preventDefault()
		setName('');
		setEmail('');
	}


  return (
	  <div className={classes.contacts}>
		  <div className={classes.contact__infoBlock}>
			  <h1>Get Started Today!</h1>
			  <p>Learn more about how you can save our planets nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet. </p>
		  </div>

			  <form className={classes.contact__form}>
				  <p>Log In</p>
			  <div className={classes.input}><input onChange={() => { changeNameHandler(event) }} value={name} type="text" placeholder='Name'/></div>
			  <div className={classes.input}><input onChange={() => { changeEmailHandler(event) }} value={email} type="email" placeholder='Email'/></div>
			  <button className={classes.button} onClick={() => handleSubmit()} type='submit'>BOOK A DEMO</button>
			  </form>

		   <div className={classes.contacts__leavesImg}>
				 <Image src="/contact.png" width={82} height={102} alt={'contact'} />
			</div>
	 </div>
  )
}
