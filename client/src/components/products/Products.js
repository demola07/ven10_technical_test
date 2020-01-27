import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    const { products } = this.state;
    return (
      <div>
        <h1 className='product-heading'>Products Display</h1>
        <p className='para'>
          <Link to='/ProductForm' className='add-item'>
            AddItem
          </Link>
        </p>
        <div>
          {products.map(product => (
            <ProductItem key={product._id} product={product}></ProductItem>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
