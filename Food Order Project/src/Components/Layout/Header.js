import { Fragment } from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderButton from "./HeaderButton";

function Header(props){
    return <Fragment>
        <header className={classes.header}>
            <h2>Meals For You</h2>
            <HeaderButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="food table"/>
        </div>
    </Fragment>
}
export default Header;