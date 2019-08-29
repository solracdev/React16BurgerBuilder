import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingridientsSummary = Object.keys(props.ingridients).map((ingridient) => {
        return (
            <li key={ingridient}>
                <span style={{ textTransform: 'capitalize' }}>{ingridient}</span>:
                {props.ingridients[ingridient]}
            </li>
        );
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingridients:</p>
            <ul>
                {ingridientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
        </Aux>
    );
};

export default orderSummary;