import React from 'react'
import classes from "../styles/firstpage.module.scss"
import Image from 'next/image'
import parot from '../public/Parrot.png'
import headline from '../public/Headline.png'
import { HeaderComponent } from './HeaderComponent'




export const FirstPageComponent = () => {
	return (
		<div className={classes.firstPage}>
		  	<div className={classes.firstPage__leftSide}>
			  	<Image src={headline} alt="headline" width='540px' height='290px' placeholder='blur'/>
			  		<div className={classes.firstPage__text}>
				  		The scale of the challenges facing our planet can seem daunting, but we can all do something.
			  		</div>
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
			  <div className={classes.firstPage__rightSide_parrot}><Image  src={parot} alt='parrot' width={460} height={565} placeholder='blur' /></div>  
		  </div>
		  
		</div>
  )
}
