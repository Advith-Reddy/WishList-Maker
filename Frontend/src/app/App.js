import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../products/product';
import Wishlist from '../wishlist/wishlist'
const http = new HttpService();
class App extends Component {

  constructor(props){
    super(props);

    this.state = {products:[]}

    //bind functions
    this.loadData=this.loadData.bind(this);
    this.productList=this.productList.bind(this);
    this.loadData();
  }
  loadData = () => {//returning immediately a promise from httpservice
    var self = this;
    http.getProducts().then(data => {//when the request is done then..... accordingly calls the suitable function
      self.setState({products: data})
    }, err => {

    });
  }

  productList = () => {
    const list =this.state.products.map((product) =>
        <div className="col-sm-4" key={product._id}>
         <Product product= {product}/>
        </div>
    );
    return(list);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="container-fluid App-main">
            <div className="row">
              <div className="col-sm-8">
                <div className="row">
                   {this.productList()}
                </div>
              </div>
              <div className="col-sm-4">
                <Wishlist />
              </div>
            </div>

          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    );
  }
}

export default App;
