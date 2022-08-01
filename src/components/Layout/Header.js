import {Fragment} from "react";

import mealimg from '../../assets/meals.jpeg';
import HeaderCartButton from "./HeaderCartButton";

import classes from './Header.module.css';


const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Food Delivery</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealimg} alt="table of food" />
        </div>
    </Fragment>
};

export default Header;