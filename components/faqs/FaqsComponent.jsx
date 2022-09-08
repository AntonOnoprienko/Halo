import React from 'react'
import { FaqItemComponent } from './FaqItemComponent'
import classes from '../../styles/faqs.module.scss'

export const FaqsComponent = () => {
  return (
	  <div className={classes.faqs__wrapper}>
		  <div className={classes.faqs__left_block}>
			  <div className={classes.left_block_title}>Ready to Get started?</div>
			  <div className={classes.left_block_txt}>When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.</div>
			  <div className={classes.left_block_btn}>CONTACT US</div>
		  </div>
		  <div className={classes.faqs__right_block}>
			  <FaqItemComponent title={'What can I do to protect our planet?'} text={'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources'} />
			  <FaqItemComponent title={'How to save nature ecology?'} text={'Some text about ecology!'} />
			  <FaqItemComponent title={'What is nature conservation?'} text={'I like conservation from my grandma! onoprienkoanton88@gmail.com'} />
		  </div>
	 </div>
  )
}
