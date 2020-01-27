import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Products from './components/products/Products';
import Product from './components/products/Product';
import ProductForm from './components/productForm/productForm';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          {/* <Products></Products> */}
          <Route exact path='/' component={Products} />
          <Route exact path='/productForm' component={ProductForm} />
          <Route exact path='/:id' component={Product} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
