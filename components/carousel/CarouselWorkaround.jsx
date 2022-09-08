import Image from 'next/image'
import React,{useState} from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import classes from '../../styles/carousel.module.scss'


export const Workaround = () => {
	const [counter, setCounter] = useState(1)
	const rightChevronsOpacity = {opacity: counter === 5 ? '0.2' : '1' } 
	const leftChevronsOpacity = {opacity: counter === 1 ? '0.2' : '1' } 
  return (
	  <div className={classes.slider__wraper}>
		  <div className={classes.window}>
			{ counter === 1 && <div><Image src={'/sl1.png'} alt={ '/sl1.png'} width={220} height={220}  /></div> }
		  	{ counter === 2 && <div><Image src={'/sl2.png'} alt={ '/sl2.png'} width={220} height={220} /></div> }
			{ counter === 3 && <div><Image src={'/sl3.png'} alt={ '/sl3.png'} width={424} height={365}  /></div> }
			{ counter === 4 && <div><Image src={'/sl4.png'} alt={ '/sl4.png'} width={270} height={240}  /></div> }
			{ counter === 5 && <div><Image src={'/sl5.png'} alt={ '/sl5.png'} width={240} height={230}  /></div> }
		  </div>
		  <div className={classes.chevrons}>
			  <button style={{backgroundColor: '#FFBD9E'}} disabled={counter === 1} onClick={() => { setCounter(prev => prev - 1)}}><FaChevronLeft className={classes.arrow}  style={leftChevronsOpacity} /></button>
			  {counter}  <span style={{ opacity: '0.2' }}>/  5</span> 
			  <button style={{backgroundColor: '#FFBD9E'}}  disabled={counter === 5} onClick={() => setCounter(prev => prev + 1)}> <FaChevronRight className={classes.arrow}  style={rightChevronsOpacity} /> </button>
			</div>
	  </div>
  )
}
