import React from 'react';
import classes from './Burger.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

const burger = props => {

    let burgerIngridients = Object.keys(props.ingridients).map(ingridient => {
        return [...Array(props.ingridients[ingridient])].map((_, index) => {
            return <BurgerIngridient key={ingridient + index} type={ingridient} />
        })
    }).reduce((previousValue, currentValue) => {
        return previousValue.concat(currentValue);
    }, []);

    if (burgerIngridients.length === 0) {
        burgerIngridients = <p>Please, start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            {burgerIngridients}
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
};

export default burger;