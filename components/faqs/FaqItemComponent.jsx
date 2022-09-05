import React from 'react'
import { useState } from 'react'
import classes from '../../styles/faqs.module.scss'



export const FaqItemComponent = (props) => {
	const [toggle,setToggle] = 	useState(false)
  return (
	  <div className={classes.item_wrapper}>
		  <div className={classes.item_wrapper_title_btn}>
		  <p className={classes.item_title}>{props.title}</p> 
			  <button onClick={() => { setToggle(!toggle) }} className={classes.item_btn}>{toggle?'-':'+'}</button>
			  </div>
		  <p className={classes.item_txt}>{toggle &&  props.text }</p>
		  
	</div>
  )
}
