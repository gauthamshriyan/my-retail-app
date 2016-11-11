import React, { Component } from 'react';

class BuyingOptions extends Component {

    render() {
        const productData = this.props.productData;
        const purchasingChannelCode = productData.purchasingChannelCode;
        let pickInStoreButton;
        let addToCart;
        if (purchasingChannelCode === '0' || purchasingChannelCode === '2') {
            pickInStoreButton = (<div className="pickup-btn">
              <button className="black btn btn-default">Pick up in Store</button>
              <span>find in store</span>
            </div>);
        }

        if (purchasingChannelCode === '0' || purchasingChannelCode === '1') {
            addToCart = <button className="btn btn-default">Add to Cart</button>;
        }

        return (
          <div className="large-button-group clearfix">{pickInStoreButton} {addToCart}</div>
        );
    }
}

export default BuyingOptions;
