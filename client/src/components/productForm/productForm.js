import React, { Component } from 'react';
import axios from 'axios';

export class productForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      description: '',
      price: null,
      category: '',
      color: '',
      productImage: null
    };
  }

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  onChangeFileHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      productImage: event.target.files[0]
    });
  };

  onSubmitHandler = async event => {
    event.preventDefault();
    const {
      id,
      name,
      description,
      price,
      category,
      productImage,
      color
    } = this.state;
    try {
      const formData = new FormData();
      formData.append('productImage', productImage);
      formData.append('id', id);
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('color', color);

      const res = axios.post('/api/product', formData, {
        headers: { 'content-type': 'multipart/form-data' }
      });
      console.log(res);
      this.setState({
        id: '',
        name: '',
        description: '',
        price: null,
        category: '',
        color: '',
        productImage: null
      });
      alert('File Upload Successfull.');
    } catch (error) {
      alert('File Upload Unsuccessfull...Please try again');
      console.error(error);
    }
  };
  render() {
    const { id, name, description, price, category, color, file } = this.state;

    return (
      <div className='overlay'>
        <div className='head'>
          <h1>Add a Product </h1>
          <small>*All fields are compulsory</small>
        </div>

        <form onSubmit={this.onSubmitHandler}>
          <input
            type='text'
            name='id'
            value={id}
            placeholder='Enter id'
            onChange={this.onChangeHandler}
            required
          />{' '}
          <br />
          <input
            type='text'
            name='name'
            value={name}
            placeholder='Name of Product'
            onChange={this.onChangeHandler}
            required
          />
          <br />
          <input
            type='text'
            value={description}
            name='description'
            placeholder='Enter Description of Product'
            onChange={this.onChangeHandler}
            required
          />
          <br />
          <input
            type='number'
            name='price'
            value={price}
            placeholder='Enter Price of Product ($)'
            onChange={this.onChangeHandler}
            required
          />
          <br />
          <input
            type='text'
            name='category'
            value={category}
            placeholder='Enter Product Category'
            onChange={this.onChangeHandler}
            required
          />
          <br />
          <input
            type='text'
            value={color}
            name='color'
            placeholder='Enter Product color'
            onChange={this.onChangeHandler}
            required
          />
          <br />
          <div className='file'>
            <input
              type='file'
              name='productImage'
              required
              accept='image/png, image/jpeg'
              onChange={this.onChangeFileHandler}
            />
          </div>
          <input type='submit' value='Post' />
        </form>
      </div>
    );
  }
}

export default productForm;
