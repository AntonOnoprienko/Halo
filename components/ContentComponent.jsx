import React from 'react'
import classes from "../styles/mainClasses.module.scss"
import { FirstPageComponent } from './FirstPageComponent'
import { HeaderComponent } from './HeaderComponent'
import { NewsComponent } from './NewsComponent'
import { QuoteComponent } from './QuoteComponent'
import { SliderComponent } from './SliderComponent'
import { TeamComponent } from './TeamComponent'

export const ContentComponent = () => {
	return (
		<div className={classes.wrapper}>
			<header>
				<div className={classes.header + '__container'}>
					<HeaderComponent/>
					<FirstPageComponent />
				</div>
			</header>
			<main className={classes.page}>
				<div className={classes.page + '__container'}>
					<NewsComponent />
					<SliderComponent />
					<TeamComponent />
					<QuoteComponent />
				</div> 
				</main>
			<footer className={classes.footer + '__container'}>FOOTER</footer>
		</div>
	 
  )
}