import Image from "next/image";
import classes from "../styles/mainClasses.module.scss"

const HeaderComponent = () => {
	return (
		<div className={classes.header__content}>

			<Image src='/logo.png' alt='logo' width='116px' height='37px' />

			<div className={classes.menu__items}>
				<b><span>Home</span></b>
				<span>Our mission</span>
				<span>Places</span>
				<span>Team</span>	
			</div>

			<div className={classes.header__button}>
				<span>Apply</span>
			</div>

		</div>
	);
}

export default HeaderComponent;