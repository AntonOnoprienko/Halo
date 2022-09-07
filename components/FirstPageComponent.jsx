import React from 'react'
import classes from "../styles/firstpage.module.scss"
import Image from 'next/image'
import parot from '../public/Parrot.png'
import headline from '../public/Headline.png'




export const FirstPageComponent = () => {
	return (
		<div className={classes.firstPage}>
		  	<div className={classes.left_block}>
				<div className={classes.left_block_img}>
					<Image src={headline} alt="headline" width='540px' height='290px' placeholder='blur' />
				</div>
			  	<p className={classes.firstPage__text}>
				  		The scale of the challenges facing our planet can seem daunting, but we can all do something.
			  	</p>
			  			<div className={classes.firstPage__target_button_wrapper}>
						  <div className={classes.firstPage__target_button_text}>
						 	<Image src='/Vector.png' alt='target' width="14px" height="20px"/>
						<input placeholder="Find the place to help" style={{padding: '0 10px'}}/>
				 		  </div>
				 			<div className={classes.firstPage__target_button}>
								<span>SEARCH</span>
				 			</div>
			  			</div>
		  </div>
		  <div className={classes.right_block}>
			<Image  src={parot} alt='parrot' width={510} height={620} placeholder='blur' />  
		  </div>
		  
		</div>
  )
}
