import Image from 'next/image'
import React, {useState} from 'react'
import classes from '../styles/slider.module.scss'
import { SliderContentComponent } from './SliderContentComponent'

export const SliderComponent = () => {
	const [card,setCard] = useState(1)
	
  return (
	  <div className={classes.slider__wrapper}>
		  <button  disabled={card === 1} className={classes.btn} onClick={() => {setCard(prev => prev -1)}} ><Image  src={'/Chevron_left.png'} alt={'<'} width={24} height={44} /></button>

		  <div className={classes.slider__box}>
			{ card === 1 && <SliderContentComponent bcg={'#FFBD9E'} title={'Travel In Japan: The True Experience'} text={'When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.'} />}
			{ card === 2 && <SliderContentComponent bcg={'#FFADAD'} title={'Helping Wild Turtles To Travel In Japan'} text={'The scale of the challenges facing our planet can seem daunting, but we can all do something. Challenges facing our planet can seem daunting, but we can all do something.'} />}
			{ card === 3 && <SliderContentComponent bcg={'#CBCBFF'} title={'Threats of Modern Indusrial World '} text={'The scale of the challenges facing our planet can seem daunting, but we can all do something. Easy to asso- ciate it with a geometric patterned wallpaper.'} />}
		  </div>

		  <button disabled={card === 3}  className={classes.btn} onClick={() => {setCard(prev => prev +1)}}><Image   src={'/Chevron_right.png'} alt={'>'} width={24} height={44} /></button>
	 </div>
  )
}
