import React from 'react'
import Image from 'next/image'
import classes from '../styles/footer.module.scss'

export const FooterComponent = () => {
  return (
	  <div className={classes.footer__wrapper}>
		  <div className={classes.item_block}>
			  <p className={classes.contacts}>CONTACTS</p>
			  <p className={classes.text}>2019 Rootz Foundation. <br/> All rights reserved</p>
		  </div>
		 <div className={classes.item_block}>
			  <p className={classes.title}>Headquarters</p>
			  <p className={classes.text}>1234 Taliban <br/>Los Angeles, La <br/> 1234567(123) 456-7890</p>
		  </div>
		  <div>
			  <p className={classes.title}>Social media</p>
			  <Image src='/media.png' width={128} height={32} alt={'media'} />
		  </div>
	</div>
  )
}
