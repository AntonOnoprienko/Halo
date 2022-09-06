import React from 'react'
import classes from '../../styles/carousel.module.scss'
import { CarouselItem } from './Carouselitem'
import {Image} from 'next/image'


export const СarouselComponent = () => {
	return (
		<>
			{/*<Image src={'/sl1.png'} alt={ '/sl1.png'} width={155} height={155}  /></div>
			<div><Image src={'/sl2.png'} alt={ '/sl2.png'} width={210} height={210}  />2</div>
			<div><Image src={'/sl3.png'} alt={ '/sl3.png'} width={330} height={280}  />3</div>
			<div><Image src={'/sl4.png'} alt={ '/sl4.png'} width={210} height={185}  />4</div>
			<div><Image src={'/sl5.png'} alt={ '/sl5.png'} width={175} height={155}  />5</div>*/}
		<CarouselItem>
			
			

		  <div className={`${classes.item} ${classes.item_1}`}>item 1</div>
		  <div className={`${classes.item} ${classes.item_2}`}>item 2</div>
		  <div className={`${classes.item} ${classes.item_3}`}>item 3</div>
		  

			</CarouselItem>
			</>
  )
}
