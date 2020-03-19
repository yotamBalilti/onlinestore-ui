import React, { Component } from 'react'
import ProductService from '../../../services/product.service';
import CartService from '../../../services/cart.service';
import './Product.scss';

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            itemQuantity: 1
        }
        this.productId = this.props.match.params.id;
    }

    componentDidMount() {
        ProductService.getById(this.productId)
            .then(res => res.json())
            .then(product => this.setState({ product }));
    }

    addToCart() {
        CartService.add(this.state.product.id, this.state.itemQuantity)
    }

    changeQuantity(event) {
        this.setState({ itemQuantity: event.target.value });
    }

    render() {
        return (
            <div className="form_container product_container">
                <div className="product_image">
                    <img src={`http://localhost:4000/${this.state.product.image}`}></img>
                </div>
                <div className="product_details">
                    <h1 className="product_title">{this.state.product.title}</h1>
                    <div className="product_description">{this.state.product.description}</div>
                    <div className="product_details_bottom">
                        <div className="product_price">Price: ${this.state.product.price}</div>
                        <div className="product_add_to_cart">
                            <div className="product_qty">
                                <select className="itemQty" onChange={this.changeQuantity.bind(this)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <button className="btn_add_to_cart"
                                onClick={this.addToCart.bind(this)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
