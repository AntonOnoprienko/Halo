import Image from "next/image";
import { useState } from "react";
import classes from "../styles/header.module.scss"

export const HeaderComponent = ({home,mission,places,team,work}) => {

	const [isOpen,setIsOpen] = useState(false)

	const scrolToSection = (refElement) => { 
		window.scrollTo({
			top: refElement.current.offsetTop,
			behavior: 'smooth'
		})
	}
	return (
		<>
			<section className={classes.header__wrapper}>
				<h1 className='invisible'>Header</h1>
				<a href="#"><Image src='/logotype.png' alt='logotype' width='110px' height='37px' /></a>
			<ul className={classes.header__menu_items}>
					<li onClick={() => { scrolToSection(home) }}><b>Home</b></li>
					<li onClick={() => { scrolToSection(mission) }}>Our mission</li>
					<li onClick={() => { scrolToSection(places) }}>Places</li>
					<li onClick={() => { scrolToSection(team)}}>Team</li>	
			</ul>

				{!isOpen && <button className={classes.burgerBtn}
					onClick={() => { setIsOpen(!isOpen) }}>
					<Image src='/union.png' alt="union" width={22} height={17} />
				</button>}

				{isOpen && <button className={classes.burgerBtn}
					onClick={() => { setIsOpen(!isOpen) }}>
					<Image src='/icon-close.png' alt="union" width={16} height={16} />
				</button>}


			<button type="button" className={classes.header__button}>Apply</button>
			</section>
			{isOpen && <ul className={classes.navbar_wrapper}>
				<li className={classes.navbar_item} onClick={() => { scrolToSection(home) }} ><b>Home</b></li>
				<li className={classes.navbar_item} onClick={() => { scrolToSection(work) }} >Our mission</li>
				<li className={classes.navbar_item} onClick={() => { scrolToSection(places) }} >Places</li>
				<li className={classes.navbar_item} onClick={() => { scrolToSection(team) }}>Team</li>
				<li><button className={classes.navbar_btn}
					onClick={() => { setIsOpen(false) }}>Apply</button>
				</li>
			</ul> }
		</>
	);
}

