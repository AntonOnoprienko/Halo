import Image from 'next/image'
import React from 'react'
import classes from '../styles/contact.module.scss'

export const ContactComponent = () => {
  return (
	  <div className={classes.contact__wrapper}>
		  <div className={classes.contact__text_wrapper}>
			  <h1 className={classes.title}>Get Started Today!</h1>
			  <p className={classes.text}>Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet. </p>
		  </div>
		  <form>
			  <div className={classes.contact__form_wrapper}>
				  <div className={classes.login}>
					  <p>Log In</p>
				  </div>
				  <div className={classes.input}><input type="text" placeholder='Name'/></div>
				  <div className={classes.input}><input type="text" placeholder='Email'/></div>
				  <div className={classes.button}>BOOK A DEMO</div>
			  </div>
		  </form>
		   <div className={classes.img_wrapper}>
						  <Image src="/contact.png" width={82} height={102} alt={'contact'} />
						</div>
	 </div>
  )
}
