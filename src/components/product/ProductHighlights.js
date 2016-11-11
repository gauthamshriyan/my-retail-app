import React, { Component } from 'react';

class ProductHightlights extends Component {

    constructor(props) {
        super(props);
        this.renderHighlights = this.renderHighlights.bind(this);
    }

    renderHighlights() {
        const features = this.props.features || [];
        const highlights = [];
        features.forEach((feature, i) => {
            feature = feature.replace(/<[^>]+>/ig, '');
            highlights.push(<li key={`feature${i}`}>{feature}</li>);
        });
        return <ul>{highlights}</ul>;
    }

    render() {
        return (
          <div>
            <h1 className="highlights-header">product highlights</h1>
            <div className="highlights-wrapper">{this.renderHighlights()}</div>
          </div>
        );
    }
}

export default ProductHightlights;
