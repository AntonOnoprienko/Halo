
import React from 'react'
import classes from '../../styles/quote.module.scss'
import { QuoteItemComponent } from './QuoteItemComponent'

export const QuoteComponent = () => {
  return (
	  <div className={classes.quote__wrapper}>
		  <div className={classes.text}>
			  The scale of the challenges facing our planet can seem daunting, but we can all do something.
		  </div>
		  <div className={classes.border}>
				<div className={classes.items}>
				  <QuoteItemComponent img={'/icon1.png'} w={42} h={42} txt={ 'ASSETS VALUE COMPOSER'} />
				  <QuoteItemComponent img={'/icon2.png'} w={40} h={40} txt={' GRAPH BUDGET ANALYZER' } />
				  <QuoteItemComponent img={'/icon3.png'} w={32} h={40} txt={' MONTHLY AVG. REVENUE' } />
		  		</div>  
		  </div>
		  
	  </div>
  )
}
