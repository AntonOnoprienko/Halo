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
import { FooterComponent } from './FooterComponent'
import { СarouselComponent } from './carousel/СarouselComponent'


import Head from 'next/head'
export const ContentComponent = () => {
	return (
		<>
		<Head>
			<title> Halo lab </title>
		</Head>
			
		<div className={classes.wrapper}>
				
				<div className={classes.header}>
					<div className='__container'>
					<HeaderComponent/>
					<FirstPageComponent />
					</div>
				</div>
				
			<main>
				<div className={'__container'}>
					<NewsComponent />
					<SliderComponent />
					<TeamComponent />
					<QuoteComponent />
					<ContactComponent />
					<FaqsComponent />
				</div>
				<div className={classes.bcg}>
				<СarouselComponent />
				</div>
			</main>
				
			<footer>
				<div className={'__container'}>
					<FooterComponent />
				</div>
			</footer> 
				
		</div>
	 </>
  )
}