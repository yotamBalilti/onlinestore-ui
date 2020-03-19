import React, { Component } from 'react';
import CartService from '../../../services/cart.service';
import './CartButton.scss';

export class CartButton extends Component {
    constructor(props) {
        super(props);
    }

    cartBadge() {
        if (CartService.getAll().length > 0) {
            return CartService.getAll().length-1;
        } else return 0;
    }

    cartEmpty() {
        if (CartService.getAll().length > 0)
        // if (this.state.isCartEmpty !== true)
        // if(this.cartBadge() > 0 )
            return " show";
        else
            return " hide";
    }

    render() {
        return (
            // <div className="number">
            <div className={`number ${this.cartEmpty()}`}>
                {this.cartBadge()}
            </div>
        )
    }
}

export default CartButton;
