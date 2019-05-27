import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGRIDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.5,
    bacon: 0.7
}
class BurgerBuilder extends Component {

    state = {
        ingridients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4
    }

    addIngridientHandler = (type) => {
        const totalIngridient = this.state.ingridients[type];
        const ingridientAdded = totalIngridient + 1;

        const updatedIngridients = {
            ...this.state.ingridients
        }

        updatedIngridients[type] = ingridientAdded;

        const addedPrice = INGRIDIENT_PRICE[type];
        const currentPrice = this.state.totalPrice;
        const newPrice = currentPrice + addedPrice;

        this.setState({
            totalPrice: newPrice,
            ingridients: updatedIngridients
        });
    }

    removeIngridientHandler = (type) => {
        const totalIngridient = this.state.ingridients[type];
        if (totalIngridient <= 0) {
            return
        }
        const ingridientAdded = totalIngridient - 1;

        const updatedIngridients = {
            ...this.state.ingridients
        }

        updatedIngridients[type] = ingridientAdded;

        const priceDeduction = INGRIDIENT_PRICE[type];
        const currentPrice = this.state.totalPrice;
        const newPrice = currentPrice - priceDeduction;

        this.setState({
            totalPrice: newPrice,
            ingridients: updatedIngridients
        });
    }

    render() {

        const disabledIngridients = {
            ...this.state.ingridients
        }

        for (let ingridient in disabledIngridients) {
            disabledIngridients[ingridient] = (disabledIngridients[ingridient] <= 0);
            // {salad: false, meat: true,... etc}
        }

        return (
            <Aux>
                <Burger ingridients={this.state.ingridients} />
                <BuildControls
                    addIngridient={this.addIngridientHandler}
                    removeIngridient={this.removeIngridientHandler}
                    ingridientsDisabled={disabledIngridients}
                    price={this.state.totalPrice} />
            </Aux>
        );
    };
}

export default BurgerBuilder;