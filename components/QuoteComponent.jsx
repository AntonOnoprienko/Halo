import Image from 'next/image'
import React from 'react'
import classes from '../styles/quote.module.scss'

export const QuoteComponent = () => {
  return (
	  <div className={classes.quote__wrapper}>
		  <div className={classes.text}>
			  The scale of the challenges facing our planet can seem daunting, but we can all do something.
		  </div>
		  <div className={classes.border}>
				<div className={classes.items}>
			  <div className={classes.item}>
				  <Image src='/icon1.png' width={42} height={42} />
				  <div className={classes.item_txt}>
					  ASSETS VALUE COMPOSER
					</div>
				</div>
			  <div className={classes.item}>
				  <Image src='/icon2.png' width={40} height={40} />
				  <div className={classes.item_txt}>
					  GRAPH BUDGET ANALYZER
					</div>
				</div>
			  <div className={classes.item}>
				  <Image src='/icon3.png' width={32} height={40} />
				  <div className={classes.item_txt}>
					  MONTHLY AVG. REVENUE
					</div>
				</div>
			
		  </div>  
		  </div>
		  
	  </div>
  )
}
