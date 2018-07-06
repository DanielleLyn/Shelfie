import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Product from './Component/Product/Product';
import Header from './Component/Header/Header';


class App extends Component {
  constructor (){
    super()
    this.state={
      inventory: []
    };

 this.handleAddTask = this.handleAddTask.bind( this );
 this.handleAddPhoto=this.handleAddPhoto.bind(this);
 this.handleAddProduct=this.handleAddProduct.bind(this);
 this.handleAddPrice=this.handleAddPrice.bind(this);
  }

  componentDidMount(){
    axios.get('/api/test').then(response => {
      this.setState({
       response:  response.data
      })
    })
  }

  handleAddTask() {
    let newList = [...this.state.inventory, {photo: this.state.photo, product: this.state.product, price: this.state.price}]
    this.setState({ 
      inventory: newList
    });
  }

  handleAddPhoto(val){
    this.setState({
      photo: val
    })

  }


  handleAddProduct(val){
    this.setState({
      product: val
    })
  }


  handleAddPrice(val){
    this.setState({
      price: val
    })
  }

  // handleCancel (){
  //   this.setState({
  //     inventory:''
  //   })
  // }
  


  
  render() {

    console.log(this.state.inventory)
    
    return (

      <div className="App">
  
      <Dashboard />
      <Form />
       <Product />
       <Header />
         <div className="main">

        <div className="return">
        </div>

        <div className="image">
        </div>


        <div className="inputs">
    <input value={this.state.input} placeholder="ImageUrl" onChange={ (e) => this.handleAddPhoto( e.target.value ) } />
    <input value={this.state.input} placeholder="Product Name" onChange={ (e) => this.handleAddProduct( e.target.value ) } />
    <input value={this.state.input} placeholder="Price" onChange={ (e) => this.handleAddPrice( e.target.value ) } />

        </div>
        <div className="buttons">
    <button onClick={ this.handleCancel }>Cancel</button>
    <button onClick={ this.handleAddTask }>Add to Inventory</button>
        </div>

       
        </div>


  </div>

    
    );
  }
}

export default App;
