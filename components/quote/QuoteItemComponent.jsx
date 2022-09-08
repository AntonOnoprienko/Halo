import Image from 'next/image'
import React from 'react'
import classes from '../../styles/quote.module.scss'

export const QuoteItemComponent = (props) => {
  return (
	 <div className={classes.item}>
		  <Image src={props.img} width={props.w} height={props.h} alt={'some pic'} />
				  <div className={classes.item_txt}>
			 			 {props.txt}
					</div>
				</div>
  )
}
