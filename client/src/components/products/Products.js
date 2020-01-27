import React, { Component } from 'react';
import axios from 'axios';
import ProductItem from '../products/ProductItem';

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: false
    };
  }

  getData = async () => {
    const res = await axios.get('/api/product');
    this.setState({ products: res.data });
    console.log(this.state.products);
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <h1>Products Display</h1>
        <div>
          {this.state.products.map(product => (
            <ProductItem key={product._id} product={product}></ProductItem>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
