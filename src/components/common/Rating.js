import React, { Component } from 'react';

class Ratings extends Component {
    render() {
        const rating = this.props.rating;
        return (
          <div className="rating-container">
            <div className="rating" />
            <div className="rating-fill-container" style={{ width: `${rating}px` }}><div className="rating-fill" /></div>
          </div>
        );
    }
}

export default Ratings;
