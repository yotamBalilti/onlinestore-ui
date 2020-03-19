import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.scss';
import Register from "./Register/Register";
import Login from "./Login/Login";
import Homepage from "./Homepage/Homepage";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Category from './Category/Category';
import Product from './Category/Product/Product';
import Cart from './Cart/Cart';
import Categories from './Homepage/Categories/Categories'
import Admin from './Admin/Admin';
import Footer from './Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="header">
            <Header />
          </div>
          <div className="appBody">
            {/* <div className="sidebar">
              <Categories />
            </div> */}
            <main>
              <Route path="/" exact component={Homepage} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/category/:id" exact component={Category} />
              <Route path="/category/:categoryId/product/:id" exact component={Product} />

              <Route path="/admin" exact component={Admin} />
            </main>
          </div>
            {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;