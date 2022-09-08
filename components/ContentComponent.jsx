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
import { useScrollhook } from '../hooks/scrollhooks'
import { Workaround } from './carousel/CarouselWorkaround'
export const ContentComponent = () => {

	const {refHome,
    	refOurMission,
    	refPlaces,
		refTeam,
	refWorkaround} = useScrollhook()
	return (
		<>
		<Head>
				<title> Halo lab </title>
				<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
		</Head>
			
		<div className={classes.wrapper}>
				
				<div className={classes.header}>
					<div className='__container'>
						<HeaderComponent home={refHome} mission={refOurMission} places={refPlaces} team={refTeam} work={refWorkaround} />
						<div ref={refHome}><FirstPageComponent /></div>
					</div>
				</div>
				
			<main>
				<div className={'__container'}>
					<NewsComponent />
						<div ref={refPlaces}><SliderComponent /></div>
						<div ref={refTeam}><TeamComponent /></div>
					<QuoteComponent />
					<ContactComponent />
					<FaqsComponent />
				</div>
				<div className={classes.bcg}>
						<div ref={refOurMission} className={classes.carousel}><СarouselComponent /></div>
						<div ref={refWorkaround} className={classes.workaround}><Workaround /></div>
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