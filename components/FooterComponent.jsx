import React from 'react'
import Image from 'next/image'
import classes from '../styles/footer.module.scss'

export const FooterComponent = () => {
  return (
	  <div className={classes.footer__wrapper}>
		  <div className={classes.contacts_block}>
			  <h2 className={classes.contacts}>CONTACTS</h2>
			  <p className={classes.contacts_text}>2019 Rootz Foundation. All rights reserved</p>
		  </div>

			<div className={classes.headquarters_block}>
			  <h2 className={classes.headquarters_title}>Headquarters</h2>
			  <p className={classes.headquarters_text}>1234 Taliban<br/> Los Angeles, La 1234567<br/> (123) 456-7890</p>
		 	 </div>
		  	<div className={classes.social_block}>
			  <h2 className={classes.social_title}>Social media</h2>
			  <Image src='/media.png' width={128} height={32} alt={'media'} />
		  </div>
	</div>
  )
}
