import Image from 'next/image'
import React from 'react'
import classes from '../styles/slider.module.scss'

export const SliderContentComponent = (props) => {
	return (
		<div className={classes.slider__contant} style={{ backgroundColor: props.bcg }}>
		  <div className={classes.slider__contant_leftside}>
			  <div className={classes.title}>
				  {props.title}
			  </div>
			  <div className={classes.text}>
				  {props.text}
			  </div>
			</div>
		  <div className={ classes.slider__contant_rightside}>
			  <Image src={'/slider.png'} alt={'slider'} width={320} height={430} />


		  </div>
		  </div>
  )
}
