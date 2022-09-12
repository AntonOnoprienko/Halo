import React from 'react'
import classes from "../styles/firstpage.module.scss"
import Image from 'next/image'
import parot from '../public/Parrot.png'
import headline from '../public/Headline.png'
import { useState } from 'react'




export const FirstPageComponent = () => {
	const [searchTxt, setSearchTxt] = useState('')
	const changeHandler = (event) => { 
		setSearchTxt(event.target.value)
	}
	const handleSubmit = () => { 
		event.preventDefault()
		setSearchTxt('')

	}

	return (
		<div className={classes.titlePage}>
		  	<div className={classes.titlePage__leftBlock}>
				<div className={classes.titlePage__headlineImg}>
					<Image src={headline} alt="headline" width='540px' height='290px' placeholder='blur' />
				</div>
			  	<p className={classes.titlePage__text}>
				  		The scale of the challenges facing our planet can seem daunting, but we can all do something.
			  	</p>
			  			<form className={classes.titlePage__searchform}>
						  <div className={classes.titlePage__buttonText}>
						 	<Image src='/Vector.png' alt='target' width="14px" height="20px"/>
						<input onChange={() => { changeHandler(event) }} value={searchTxt} placeholder="Find the place to help" style={{padding: '0 10px', width: '100%'}}/>
				 		  </div>
					<button onClick={() => handleSubmit()} type='submit' className={classes.titlePage__searchButton}>
								SEARCH
				 			</button>
			  			</form>
		  </div>
		  <div className={classes.titlePage__rightBlock}>
			<Image  src={parot} alt='parrot' width={510} height={620} placeholder='blur' />  
		  </div>
		  
		</div>
  )
}
