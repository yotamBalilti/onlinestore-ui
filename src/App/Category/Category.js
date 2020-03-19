import React, { Component } from 'react';
import ProductService from '../../services/product.service';
import { Link } from 'react-router-dom';
import './Category.scss';

export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.categoryId = this.props.match.params.id;
    }

    componentDidMount() {
        // console.log(this.categoryId);
        ProductService.getByCategoryId(this.categoryId)
            .then(res => res.json())
            .then(products => this.setState({ products }));
    }

    render() {
        return (
            <div className="prd-page">
                {this.state.products.map((product, i) => {
                    return <div className="all_product">

                        <Link to={`/category/${this.categoryId}/product/${product.id}`}
                            className="product"
                            key={i}>
                            <div className="prd-img"><img src={`http://localhost:4000/${product.image}`} /></div>
                            <div className="prd_title">{product.title}</div>
                        </Link>
                    </div>
                })}
            <div className="fancy-box"></div>
            </div>
        )
    }
}

export default Category;
