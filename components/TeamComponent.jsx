import React from 'react'
import Image from 'next/image'
import classes from '../styles/team.module.scss'



export const TeamComponent = () => {
  return (
	  <div className={classes.team__wrapper}>
		  <div className={classes.text_cont}>
			  <p className={classes.title}>Our Top Team</p>
			  <p className={classes.txt}>Learn more about how you can save our planets nature. </p>
		  </div>
		  <div className={classes.teamBig}>
			  <Image src={'/team.png'} alt={'teamBig'} width={1120} height={435}/>
		  </div>
		  <div className={classes.teamSmall}>
			  <Image src={'/teamSmall.png'} alt={'teamSmall'} width={350} height={605} />
			  </div>
	  </div>
  )
}
