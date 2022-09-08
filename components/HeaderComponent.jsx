import Image from "next/image";
import { useState } from "react";
import classes from "../styles/header.module.scss"

export const HeaderComponent = (props) => {

	const [isOpen,setIsOpen] = useState(false)

	const scrolToSection = (refElement) => { 

		window.scrollTo({
			top: refElement.current.offsetTop,
			behavior: 'smooth'
		})
	}

	return (
		<>
		<div className={classes.header__wrapper}>

			<Image src='/logotype.png' alt='logo' width='110px' height='37px' />

			<div className={classes.header__menu_items}>
					<b><span onClick={() => { scrolToSection(props.home) }}>Home</span></b>
					<span onClick={() => { scrolToSection(props.mission) }}>Our mission</span>
					<span onClick={() => { scrolToSection(props.places) }}>Places</span>
					<span onClick={()=>{ scrolToSection(props.team)}}>Team</span>	
			</div>
			<div className={classes.burgerBtn} onClick={() => { setIsOpen(!isOpen)}}>
				{ !isOpen && <Image src='/union.png' alt="union" width={22} height={17} />}
				{ isOpen && <Image src='/icon-close.png' alt="union" width={16} height={16} />}

			</div>
			<div className={classes.header__button}>
				<span>Apply</span>
			

				</div>
				</div>
			{isOpen && <div className={classes.navbar_wrapper}>
				<p className={classes.navbar_item} style={{fontWeight:'700'}} onClick={() => { scrolToSection(props.home) }} >Home</p>
				<p className={classes.navbar_item} onClick={() => { scrolToSection(props.work) }} >Our mission</p>
				<p className={classes.navbar_item} onClick={() => { scrolToSection(props.places) }} >Places</p>
				<p className={classes.navbar_item} onClick={()=> { scrolToSection(props.team)}}>Team</p>
				<div className={classes.navbar_btn} onClick={() => {setIsOpen(false)}}>
				<span>Apply</span>
				</div>
			</div>}
			</>
	);
}

