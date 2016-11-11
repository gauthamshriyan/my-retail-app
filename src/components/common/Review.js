import React, { Component } from 'react';
import Rating from './Rating';

class ShortReview extends Component {

    render() {
        const reviewArray = this.props.review;
        const reviewObj = reviewArray[0] || {};
        const { title, review, screenName, datePosted, overallRating } = reviewObj;
        let rating = overallRating || 0;
        rating = parseInt(rating, 10) * 20;
        let formatedDate;
        if (datePosted) {
            formatedDate = new Date(datePosted);
            formatedDate = formatedDate.toDateString().split(' ').slice(1, 4);
            formatedDate = formatedDate.join(' ');
        }

        return (
          <div className="review-container">
            <Rating rating={rating} />
            <h6 className="review-heading">{title}</h6>
            <div className="review-content">{review}</div>
            <div ><span className="review-user">{screenName}</span><span className="review-date"> {formatedDate}</span></div>
          </div>
        );
    }
}

export default ShortReview;
