import React, { Component } from 'react';
import axios from 'axios';

export class productForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='overlay'>
        <div className='head'>
          <h1>Add a Product </h1>
          <small>*All fields are compulsory</small>
        </div>
        <form>
          <input type='text' name='id' placeholder='Enter id' /> <br />
          <input type='text' name='name' placeholder='Name of Product' />
          <br />
          <input
            type='text'
            name='description'
            placeholder='Enter Description of Product'
          />
          <br />
          <input
            type='number'
            name='price'
            placeholder='Enter Price of Product ($)'
          />
          <br />
          <input
            type='text'
            name='category'
            placeholder='Enter Category Product Belongs to'
          />
          <br />
          <input type='text' name='color' placeholder='Enter Product color' />
          <br />
          <div className='file'>
            <input type='file' id='cname' name='cardname' />
          </div>
          <input type='submit' value='Post' />
        </form>
      </div>
    );
  }
}

export default productForm;
