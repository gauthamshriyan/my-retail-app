import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductInfo from './ProductInfo';
import ShortReview from './ShortReview';
import Carousel from '../common/Carousel';

class Product extends Component {

    constructor(props) {
        super(props);
        this.createImageList = this.createImageList.bind(this);
    }

    createImageList() {
        const list = [];
        const productData = this.props.productData;
        const productImagesArray = productData.Images || [];
        const productImages = productImagesArray[0] || {};
        const primaryImage = productImages.PrimaryImage || [];
        const alternateImages = productImages.AlternateImages || [];
        if (alternateImages.length > 0) {
            alternateImages.forEach((imageObject) => {
                if (imageObject.image) {
                    list.push(imageObject.image);
                }
            });
        }
        if (primaryImage[0] && primaryImage[0].image) {
            list.push(primaryImage[0].image);
        }
        return list;
    }

    render() {
        const productData = this.props.productData;
        const images = this.createImageList();
        const customerReview = productData.CustomerReview || {};

        return (
          <Row className="product-detail-container">
            <Col lg={6} md={6} sm={12}>
              <div className="product-carousel">
                <h2 className="product-title">{productData.title}</h2>
                <Carousel images={images} />
                <div className="sr-large">
                  <ShortReview review={customerReview} />
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} >
              <ProductInfo productData={productData} />
            </Col>
          </Row>);
    }
}


export default Product;
