import React, {Component} from 'react';
import './product-condensed.css';
import DataService from '../services/data-service';

var ds = new DataService();
class ProductCondensed extends Component {
    constructor(props){
        super(props);

        //bind functions
        this.removeProduct = this.removeProduct.bind(this);
    }

    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    }


    render() {
        return(
            <li className="list-group-item pc-condn">
                 {this.props.product.title} | <b>₹{this.props.product.price}</b>
                 <a className="btn btn-outline-danger" onClick={() => this.removeProduct()}>X</a>
            </li>
        );

    }
}
export default ProductCondensed;