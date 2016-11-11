import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Review from '../common/Review';
import Rating from '../common/Rating';

class ShortReview extends Component {

    render() {
        const reviewArray = this.props.review;
        const review = reviewArray[0] || {};
        const proReview = review.Pro || {};
        const conReview = review.Con || {};

        let rating = review.consolidatedOverallRating || 0;
        rating = parseInt(rating, 10) * 20;

        let viewAll;
        if (review.totalReviews) {
            viewAll = `view all ${review.totalReviews} reviews`;
        }

        return (
          <div>
            <div className="overall-ratings clearfix">
              <span className="pull-left"><Rating rating={rating} /></span>
              <span className="pull-left">overall</span>
              <span className="pull-right">{viewAll}</span>
            </div>
            <Row className="short-review-container">
              <Col lg={6} md={6} sm={6} xs={6} className="short-review-section">
                <h3 className="short-review-header">Pro</h3>
                <div className="short-review-info">most helpful 4-5 star review</div>
                <div><Review review={proReview} /> </div>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} className="short-review-section">
                <h3 className="short-review-header">Con</h3>
                <div className="short-review-info">most helpful 1-2 star review</div>
                <div><Review review={conReview} /> </div>
              </Col>
            </Row>
          </div>
        );
    }
}

export default ShortReview;
