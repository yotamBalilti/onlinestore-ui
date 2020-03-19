import React, { Component } from 'react';
import CategoryService from "../../../services/category.service.js";
import './Categories.scss';
import { Link } from 'react-router-dom';

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        CategoryService
            .getAll()
            .then(res => res.json())
            .then(categories => {
                this.setState({ categories });
            });
    }

    render() {
        return (
            <div className="categories_container">
                {this.state.categories.map((category, i) => {
                    return <div className="card">
                        <div className="front">
                            <div className="category_name">{category.name}</div>
                            <img className="category_thumbnail"></img>
                        </div>
                        <div className="back">
                            <div className="back-content">
                                <Link to={`/category/${category.id}`}
                                    className="category_name"
                                    key={i}>
                                    {category.name}
                                </Link>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        );
    }

}

export default Categories;
