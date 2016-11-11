import React, { Component } from 'react';
// import { Row, Col } from 'react-bootstrap';

class ImagePreLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'image-loading'
        };
        this.onImageLoad = this.onImageLoad.bind(this);
    }

    onImageLoad() {
        this.setState({
            className: 'image-loading image-loaded'
        });
    }

    render() {
        let className = this.state.className;
        const { src, width, height, alt, imageIndex, onClick, onMouseOut, onMouseOver, onMouseMove } = this.props;
        if (this.props.className) {
            className = `${this.props.className}${' '}${this.state.className}`;
        }
        return (
          <img
              src={src}
              width={width}
              height={height}
              alt={alt}
              data-index={imageIndex}
              onClick={onClick}
              onMouseOver={onMouseOver}
              onMouseMove={onMouseMove}
              onMouseOut={onMouseOut}
              onLoad={this.onImageLoad}
              className={className}
          />
        );
    }
}

export default ImagePreLoader;
