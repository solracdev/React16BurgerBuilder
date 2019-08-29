import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = (ingridients) => {

        const sum = Object.keys(ingridients).map(ingridient => {
            return ingridients[ingridient]
        }).reduce((sum, totalIngridient) => {
            return sum + totalIngridient;
        }, 0);

        this.setState({ purchasable: (sum > 0) });
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

        this.updatePurchaseState(updatedIngridients);
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

        this.updatePurchaseState(updatedIngridients);
    }

    purchaseHandler = () => {
        // you can do this event with arrow function or call it with
        // this.purchaseHandler.bind(this)
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert('YO ma boy');
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
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingridients={this.state.ingridients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseContinueHandler}
                        price={this.state.totalPrice} />
                </Modal>
                <Burger ingridients={this.state.ingridients} />
                <BuildControls
                    addIngridient={this.addIngridientHandler}
                    removeIngridient={this.removeIngridientHandler}
                    ingridientsDisabled={disabledIngridients}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    };
}

export default BurgerBuilder;