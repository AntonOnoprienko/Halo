import React from 'react'
import Image from 'next/image'
import team from '../public/team.png'
import classes from '../styles/team.module.scss'


export const TeamComponent = () => {
  return (
	  <div className={classes.team__wrapper}>
		  <div className={classes.text_cont}>
			  <p className={classes.title}>Our Top Team</p>
			  <p className={classes.txt}>Learn more about how you can save our planet's nature. </p>
		  </div>
		  <Image src={team} width={1120} height={435} placeholder='blur' />
	  </div>
  )
}
