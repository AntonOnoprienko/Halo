import React from 'react'
import classes from "../styles/mainClasses.module.scss"
import { FirstPageComponent } from './FirstPageComponent'
import HeaderComponent from './HeaderComponent'

export const ContentComponent = () => {
	return (
		<div className={classes.wrapper}>
			<header>
				<div className={classes.header + '__container'}>
					<HeaderComponent/>
				</div>
			</header>
			<main className={classes.page}>
				<div className={classes.page + '__container'}>
					<FirstPageComponent />
				</div> 
				</main>
			<footer className={classes.footer + '__container'}>FOOTER</footer>
		</div>
	 
  )
}
