import React, { Component } from 'react';
import './Cart.scss';
import CartService from '../../services/cart.service.js';
import ProductService from '../../services/product.service';
import cookie from 'react-cookies';

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.loadCart();
        this.windowScroll();
    }

    windowScroll() {
        const scroll_position = window.scrollX;
        document.querySelector('.cart_bg').style.background_position_x = `${scroll_position + 'px'}`;
    }

    loadCart() {
        const cartProducts = CartService.getAll();
        const ids = cartProducts.map(product => product.id);
        ProductService.getByIds(ids)
            .then(res => res.json())
            .then(products => {
                products = this.addQuantities(products, cartProducts);
                this.setState({ products });
            })
            .catch(err => console.log(err));
    }

    addQuantities(products, cartProducts) {
        let cartObj = {};
        cartProducts.forEach(product => cartObj[product.id] = product.qty);
        products.forEach(product => product.qty = cartObj[product.id]);
        return products;
    }

    calcTotal(products) {
        let total = 0;
        products.forEach(product => {
            total += product.price * product.qty;
        });
        return total;
    }

    removeFromCart(productId) {
        CartService.remove(productId);
        this.loadCart();
    }

    cartTitle() {
        if (this.state.products.length == 0)
            return 'Your cart is empty';
        else
            return `You have ${this.state.products.length} items in your cart`;
    }

    render() {
        return (
            <div className="cart_bg">
                <div className="form_container">
                    <div className="cart">
                        <div className="form_title">{this.cartTitle()}</div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th className="cart_product_title">Title</th>
                                    <th className="cart_product_description">Description</th>
                                    <th className="cart_product_quantity">Quantity</th>
                                    <th className="cart_product_price">Price</th>
                                    <th className="cart_product_sub_total" colSpan="2">Sub-total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.products.map((product, index) => {
                                    return <tr key={index}>
                                        <td className="cart_product_title">{product.title}</td>
                                        <td className="cart_product_description">{product.description}</td>
                                        <td className="cart_product_quantity">{product.qty}</td>
                                        <td className="cart_product_price">${product.price.toFixed(2)}</td>
                                        <td className="cart_product_sub_total">${(product.qty * product.price).toFixed(2)}</td>
                                        <td onClick={this.removeFromCart.bind(this, product.id)}><button>X</button></td>
                                    </tr>
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td colSpan="3"><h4>Total</h4></td>
                                </tr>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td colSpan="3">${this.calcTotal(this.state.products).toFixed(2)}</td>
                                </tr>
                            </tfoot>
                        </table>
                        {this.state.cart}
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;
