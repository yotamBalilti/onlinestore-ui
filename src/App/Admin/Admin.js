import React, { Component } from 'react';
import Products from "./Products/Products"
import Categories from "./Categories/Categories"
import Users from "./Users/Usres"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserService from '../../services/user.service';


export class Admin extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        UserService
            .me()
            .then(response => response.json())
            .then(user => {
                console.log(user);
                if(! user.isAdmin){
                    this.props.history.push('/');
                }
            });
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="row">
                        <div className="col-sm-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to="/admin/products">Products</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/admin/categories">Categories</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/admin/users">Users</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-9">
                            <Route path="/admin/products" component={Products} />
                            <Route path="/admin/categories" component={Categories} />
                            <Route path="/admin/users" component={Users} />
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Admin;
