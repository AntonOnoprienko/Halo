import React from 'react'
import { cloneElement } from 'react'
import { useState, useEffect, Children } from 'react'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import classes from '../../styles/carousel.module.scss'



export const CarouselItem = ({ children }) => {
	const PAGE_WIDTH = 270
	const [pages, setPages] = useState([])
	const [offset, setOffset] = useState(0)
	const [counter, setCounter] = useState(3)
	const rightChevronsOpacity = {opacity: counter === 5 ? '0.2' : '1' } 
	const leftChevronsOpacity = {opacity: counter === 1 ? '0.2' : '1' } 
	useEffect(() => { 
		setPages(

			Children.map(children, child => { 
				return cloneElement(child, {
					style: {
						minWidth: '100%',
						maxWidth: '100%',
						minHeight: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						minWidth: PAGE_WIDTH,
					},
				}) 
			} )
		)
	},[children])

	const handlerLeftArrowClick = () => { 
		setCounter((currentCounter) => {
			const newCounter = currentCounter - 1
			if (newCounter <= 1) { 
				return 1
			}
			return newCounter
		})
		setOffset((currentOffset) => { 
			const newOffset = currentOffset + PAGE_WIDTH
			return Math.min(newOffset,PAGE_WIDTH * 2)
		})
	}
	const handlerRightArrowClick = () => {
		setCounter((currentCounter) => {
			const newCounter = currentCounter + 1
			if (newCounter >= 5) { 
				return 5
			}
			return newCounter
		})
		setOffset((currentOffset) => {
			const newOffset = currentOffset - PAGE_WIDTH
			return Math.max(newOffset,-(PAGE_WIDTH*2))
		})
	 }

  return (
	  <div className={classes.mainContainer}>
		  
		<div className = { classes.window } >
			  <div className={classes.allPagesContainer} style={{transform: `translateX(${offset}px)`}}>
				  {pages}
			  </div>
			   
		  </div>
		  <div className={classes.chevrons}>
			  <FaChevronLeft className={classes.arrow} onClick={handlerLeftArrowClick} style={leftChevronsOpacity} />
			  {counter}  <span style={{ opacity: '0.2' }}>/  5</span> 
			  <FaChevronRight className={classes.arrow} onClick={handlerRightArrowClick} style={rightChevronsOpacity} /> 
			</div>
	 </div>
  )
}
