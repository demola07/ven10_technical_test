import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: []
    };
  }

  getProduct = async () => {
    const res = await axios.get(`/api/product/${this.props.match.params.id}`);
    console.log(res.data);
    this.setState({
      product: res.data
    });
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product } = this.state;
    const {
      productImage,
      id,
      name,
      description,
      price,
      category,
      color
    } = product;

    return (
      <main className='main'>
        <div className='container'>
          <div className='imgBx'>
            <img
              className='product-img'
              src={productImage}
              alt='productImage'
            />
            <p id='pid'>Product id: {id}</p>
            <p id='color'>Available color: {color}</p>
          </div>
          <div className='details'>
            <div className='content'>
              <h2>
                {name}
                <br />
                <span>{category}</span>
              </h2>
              <p>{description}</p>
              <h3>${price}</h3>
              <Link to='/' className='button'>
                Back
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Product;
