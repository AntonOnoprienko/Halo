import React from 'react'
import classes from "../styles/mainClasses.module.scss"
import Image from 'next/image'
export const FirstPageComponent = () => {
  return (
	  <div className={classes.firstPage}>
		  <div className={classes.firstPage__leftSide}>
			  <Image src="/Headline.png" alt="headline" width='550px' height='300px'/>
			  <div className={classes.firstPage__text}>The scale of the challenges facing our planet can seem daunting, but we can all do something.</div>
			  <div className={classes.firstPage__target_button_wrapper}>
				  <div className={classes.firstPage__target_button_text}>
					  <Image src='/Vector.png' alt='target' width="14px" height="20px"/>
					  <p style={{ marginLeft: '10px' }}>Find the place to help</p>
				  </div>
				  <div className={classes.firstPage__target_button}>
					  <span>SEARCH</span>
				  </div>
			  </div>
		  </div>
		  <div className={classes.firstPage__rightSide}>
			  <Image src="/Parrot.png" alt='parrot' width='460px' height='565px' />
			  <Image src="/Table.png" alt='cart' width="300px" height="350wpx" />
		  </div>
		  
	 </div>
  )
}
