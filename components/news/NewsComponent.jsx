import React from 'react'
import { NewsItemComponent } from './NewsItemComponent'
import classes from '../../styles/news.module.scss'


export const NewsComponent = () => {
  return (
	  <div className={classes.news__wrapper}>
		  <NewsItemComponent hashtag={'Stories'} text={'Travel In Japan: The True Experience'} src={'/Pic1.png'} width={112} height={112} alt={'story'}/>
		  <NewsItemComponent hashtag={'VideoTutor'} text={'Helping Wild Turtles'} src={'/Pic2.png'} width={172} height={112} alt={'videotutor'}/>
		  <NewsItemComponent hashtag={'Photostory'} text={'Threats of Indusrial World '} src={'/Pic3.png'} width={112} height={112} alt={'photostory'} />
	 </div>
  )
}
