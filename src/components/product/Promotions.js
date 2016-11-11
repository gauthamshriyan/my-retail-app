import React, { Component } from 'react';

class Promotions extends Component {

    render() {
        const promotions = this.props.promotions || [];
        const promotionList = [];
        promotions.forEach((promotion, i) => {
            if (promotion && promotion.Description
                && promotion.Description[0]
                && promotion.Description[0].shortDescription) {
                promotionList.push(
                  <div key={`promotion${i}`}>
                    <span className="promotion-text">{promotion.Description[0].shortDescription}</span>
                  </div>
              );
            }
        });

        return (
          <div className="promotion-container">{promotionList}</div>
        );
    }
}

export default Promotions;
