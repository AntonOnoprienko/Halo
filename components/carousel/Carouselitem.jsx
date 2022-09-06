import React from 'react'
import { cloneElement } from 'react'
import { useState, useEffect, Children } from 'react'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import classes from '../../styles/carousel.module.scss'



export const CarouselItem = ({ children }) => {
	const PAGE_WIDTH = 1200
	const [pages, setPages] = useState([])
	const [offset, setOffset] = useState(0)
	
	useEffect(() => { 
		setPages(

			Children.map(children, child => { 
				return cloneElement(child, {
					style: {
						height: '100%',
						minWidth: `${PAGE_WIDTH}px`,
						maxWidth: `${PAGE_WIDTH}px`,
					},
				}) 
			} )
		)
	},[])

	const handlerLeftArrowClick = () => { 
		setOffset((currentOffset) => { 
			const newOffset = currentOffset + PAGE_WIDTH
			console.log(newOffset)
			return Math.min(newOffset,0)
		})
	}
	const handlerRightArrowClick = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset - PAGE_WIDTH
			const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
			console.log(newOffset,maxOffset)
			return Math.max(newOffset,maxOffset)
		})
	 }

  return (
	  <div className={classes.mainContainer}>
		  <FaChevronLeft className={classes.arrow} onClick={handlerLeftArrowClick} /> 
		<div className = { classes.window } >
			  <div className={classes.allPagesContainer} style={{transform: `translateX(${offset}px)`}}>
				  {pages}
			  </div>
		</div>
		<FaChevronRight className={classes.arrow} onClick={handlerRightArrowClick} />  
	 </div>
  )
}
