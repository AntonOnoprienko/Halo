import React from 'react'
import classes from "../styles/mainClasses.module.scss"
import { ContactComponent } from './ContactComponent'
import { FirstPageComponent } from './FirstPageComponent'
import { HeaderComponent } from './HeaderComponent'
import { NewsComponent } from './news/NewsComponent'
import { QuoteComponent } from './quote/QuoteComponent'
import { SliderComponent } from './slider/SliderComponent'
import { TeamComponent } from './TeamComponent'
import { FaqsComponent } from './faqs/FaqsComponent'
import {FooterComponent} from './FooterComponent'
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
					<ContactComponent />
					<FaqsComponent />
					<FooterComponent />
				</div> 
			</main>
			
		</div>
	 
  )
}