import React from 'react'
import Image from 'next/image'
import teamBig from '../public/team.png'
import teamSmall from '../public/teamSmall.png'
import classes from '../styles/team.module.scss'


export const TeamComponent = () => {
  return (
	  <div className={classes.team__wrapper}>
		  <div className={classes.text_cont}>
			  <p className={classes.title}>Our Top Team</p>
			  <p className={classes.txt}>Learn more about how you can save our planets nature. </p>
		  </div>
		  <div className={classes.teamBig}>
			  <Image src={teamBig} alt={'teamBig'} width={1120} height={435} placeholder='blur'  />
		  </div>
		  <div className={classes.teamSmall}>
			  <Image src={teamSmall} alt={'teamSmall'} width={350} height={605} placeholder='blur'  />
			  </div>
	  </div>
  )
}
