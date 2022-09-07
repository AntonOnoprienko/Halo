import React from 'react'
import { CarouselItem } from './Carouselitem'
import Image from 'next/image'


export const СarouselComponent = () => {
	return (
		<CarouselItem>
			<div><Image src={'/sl1.png'} alt={ '/sl1.png'} width={220} height={220}  /></div>
		  	<div><Image src={'/sl2.png'} alt={ '/sl2.png'} width={220} height={220}  /></div>
			<div><Image src={'/sl3.png'} alt={ '/sl3.png'} width={435} height={365}  /></div>
			<div><Image src={'/sl4.png'} alt={ '/sl4.png'} width={270} height={240}  /></div>
			<div><Image src={'/sl5.png'} alt={ '/sl5.png'} width={240} height={230}  /></div>
		</CarouselItem>
  )
}
