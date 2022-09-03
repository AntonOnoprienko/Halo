import Image from 'next/image'
import React from 'react'
import classes from '../styles/news.module.scss'

export const NewsItemComponent = (props) => {
  return (
	  <div className={classes.news__item}>
			  <div className={classes.news__item_img}>
			  <Image src={props.src} width={props.width} height={props.height} alt={props.alt} />
			  </div>
		  <div className={classes.news__info}>
			  <p className={classes.news__item_hashtag}>{<span style={{ color: 'black', fontWeight:'500'}}>#</span>} {props.hashtag}</p>
				  <p className={classes.news__item_text}>{props.text}</p>
				  <p className={classes.news__item_more}>see more</p>
			  </div>
		  </div>
  )
}
