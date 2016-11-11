import React, { Component } from 'react';

class Quantity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.defaultQuantity || 1
        };
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
    }

    add(e) {
        const quantity = this.state.quantity + 1;
        const onChange = this.props.onChange;
        this.setState({ quantity }, () => {
            if (typeof onChange === 'function') {
                onChange(e, quantity);
            }
        });
    }

    subtract(e) {
        const onChange = this.props.onChange;
        let quantity = this.state.quantity - 1;
        if (quantity < 1) {
            quantity = 1;
        }
        this.setState({ quantity }, () => {
            if (typeof onChange === 'function') {
                onChange(e, quantity);
            }
        });
    }

    render() {
        return (
          <div className={this.props.className}>
            <span className="quantity-text">quantity:</span>
            <button className="quantity-btn"onClick={this.subtract}>-</button>
            <span className="quantity-number">{this.state.quantity}</span>
            <button className="quantity-btn" onClick={this.add}>+</button>
          </div>
        );
    }
}

export default Quantity;
