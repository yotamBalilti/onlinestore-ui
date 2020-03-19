import React, { Component } from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import Product from '../../../models/product';
import CategoryService from '../../../services/category.service';
import productService from '../../../services/product.service';


export class Products extends Component {
    constructor(props) {
        super(props);
        this.image = React.createRef();
        this.state = {
            submitting: false,
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

    send(values) {
        productService.create(values);
    }



    render() {
        return (
            <div>
                <h1>products</h1>
                <div className="register_container">
                    <Formik
                        initialValues={{ title: '', description: '', price: '', category: '' }}
                        validationSchema={Product}
                        onSubmit={this.send.bind(this)}>
                        <Form>

                            <div className="form-group">
                                <label className="label">Title:</label>
                                <Field name="title" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <Field name="description" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Price:</label>
                                <Field name="price" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Category:</label>
                                <Field name="categoryId" component="select" placeholder="Choose category">
                                    <option disabled selected value>Choose category</option>
                                    {this.state.categories.map((category, i) => {
                                        return <option defaultValue={category.id} 
                                                key={i}
                                                >
                                                {category.name}</option>
                                    })}
                                </Field>
                            </div>
                            <div className="form-group">
                                <label>Uplaod Image:</label>
                                <input name="image" type="file" ref={this.image}/>
                            </div>
                            <div className="form-group">
                                <input type="submit"
                                    value="Submit"
                                    className="btn btn-primary"
                                    disabled={this.state.submitting}
                                />
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        )
    }
}

export default Products;
