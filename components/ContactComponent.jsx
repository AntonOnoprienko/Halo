import Image from 'next/image'
import React from 'react'
import classes from '../styles/contact.module.scss'

export const ContactComponent = () => {
  return (
	  <div className={classes.contact__wrapper}>
		  <div className={classes.contact_txt_block}>
			  <h1>Get Started Today!</h1>
			  <p>Learn more about how you can save our planets nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet. </p>
		  </div>

			  <div className={classes.contact__form}>
				  <p>Log In</p>
				  	<div className={classes.input}><input type="text" placeholder='Name'/></div>
				  	<div className={classes.input}><input type="text" placeholder='Email'/></div>
				  	<div className={classes.button}>BOOK A DEMO</div>
			  </div>

		   <div className={classes.image_wr}>
						  <Image src="/contact.png" width={82} height={102} alt={'contact'} />
						</div>
	 </div>
  )
}
