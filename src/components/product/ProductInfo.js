import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Promotions from './Promotions';
import Quantity from '../common/Quantity';
import ProductHighlights from './ProductHighlights';
import BuyingOptions from './BuyingOptions';
import ShortReview from './ShortReview';

class ProductInfo extends Component {

    constructor(props) {
        super(props);
        this.getHighlights = this.getHighlights.bind(this);
    }

    getHighlights() {
        const productData = this.props.productData;
        const itemDescriptionArray = productData.ItemDescription || [];
        const itemDescription = itemDescriptionArray[0] || {};
        const features = itemDescription.features || [];
        return features;
    }

    render() {
        const productData = this.props.productData;
        let formattedPriceValue;
        let priceQualifier;
        const offers = productData.Offers;
        const promotions = productData.Promotions;
        if (offers && offers[0] &&
          offers[0].OfferPrice
          && offers[0].OfferPrice[0]
          && offers[0].OfferPrice[0].formattedPriceValue) {
            formattedPriceValue = offers[0].OfferPrice[0].formattedPriceValue;
            if (offers[0].OfferPrice[0].priceQualifier) {
                priceQualifier = offers[0].OfferPrice[0].priceQualifier;
            }
        }
        const customerReview = productData.CustomerReview || {};
        const features = this.getHighlights() || [];
        return (
          <div className="product-info-container">
            <div className="product-price">{formattedPriceValue} <span className="gray-text">{priceQualifier}</span></div>
            <Promotions promotions={promotions} />
            <Quantity className="quantity-container clearfix" defaultQuantity={1} />
            <BuyingOptions productData={productData} />
            <div className="returns">
              <span className="separator">returns</span>
              <span className="return-text"> This item must be returned within 30 days of the ship date.
               See <strong>return policy</strong> for details. Prices, promotions, styles and availablilty may vary by store and online </span>
            </div>
            <div className="small-button-group">
              <Button>ADD TO REGISTRY</Button><Button>ADD TO LIST</Button><Button>SHARE</Button>
            </div>
            <ProductHighlights features={features} />
            <div className="sr-small">
              <ShortReview review={customerReview} />
            </div>
          </div>
        );
    }
}

export default ProductInfo;
