import React, { Component } from 'react';
import ImagePreLoader from './ImagePreLoader';

class Carousel extends Component {
    constructor(props) {
        super(props);
        const images = this.props.images || [];
        const index = images.length - 1;
        this.state = {
            displayIndex: index,
            activeIndex: 0
        };
        this.previewSlider = this.previewSlider.bind(this);
        this.leftClick = this.leftClick.bind(this);
        this.rightClick = this.rightClick.bind(this);
        this.imageClick = this.imageClick.bind(this);
    }

    getSliderIndex() {
        const images = this.props.images || [];
        const centreIndex = this.state.activeIndex;
        let leftIndex = this.state.activeIndex - 1;
        if (leftIndex < 0) {
            leftIndex = images.length - 1;
        }
        let rightIndex = this.state.activeIndex + 1;
        if (rightIndex > images.length - 1) {
            rightIndex = 0;
        }
        return { leftIndex, centreIndex, rightIndex };
    }

    leftClick() {
        const images = this.props.images || [];
        let newIndex = this.state.activeIndex - 1;
        if (newIndex < 0) {
            newIndex = images.length - 1;
        }
        this.setState({
            displayIndex: newIndex,
            activeIndex: newIndex
        });
    }

    rightClick() {
        const images = this.props.images || [];
        let newIndex = this.state.activeIndex + 1;
        if (newIndex > images.length - 1) {
            newIndex = 0;
        }
        this.setState({
            displayIndex: newIndex,
            activeIndex: newIndex
        });
    }

    imageClick(e) {
        const { dataset } = e.target;
        const newIndex = dataset.index;
        if (newIndex) {
            this.setState({
                displayIndex: parseInt(newIndex, 10),
                activeIndex: parseInt(newIndex, 10)
            });
        }
    }

    handleMouseOver(e) {
        const img = e.target;
        img.style.transform = 'scale(1.3)';
    }

    handleMouseOut(e) {
        const img = e.target;
        img.style.transform = 'scale(1)';
    }

    handleMouseMove(e) {
        const img = e.target;
        const width = 400;
        const height = 400;
        const box = img.getBoundingClientRect();
        const top = box.top + (img.scrollTop - img.clientTop);
        const left = box.left + (img.scrollLeft - img.clientLeft);
        const transformX = ((e.pageX - left) / width) * 100;
        const transformY = ((e.pageY - top) / height) * 100;
        const transformOrigin = `${transformX}% ${transformY}%`;
        img.style.transformOrigin = transformOrigin;
    }

    previewSlider() {
        const images = this.props.images || [];
        const slider = [];
        let className;
        if (images.length > 3) {
          // Show 3 Images
            const index = this.getSliderIndex();
            slider.push(<button key="leftCarousel" onClick={this.leftClick} className="slide-arrow" />);
            slider.push(<ImagePreLoader onClick={this.imageClick} imageIndex={index.leftIndex} width="69" height="69" alt="" src={images[index.leftIndex]} key={index.leftIndex} />);
            if (index.centreIndex === this.state.displayIndex) {
                className = 'active-image';
            }
            slider.push(<ImagePreLoader
                className={className}
                onClick={this.imageClick}
                imageIndex={index.centreIndex}
                width="69"
                height="69"
                alt=""
                src={images[index.centreIndex]}
                key={index.centreIndex}
            />);
            slider.push(<ImagePreLoader onClick={this.imageClick} imageIndex={index.rightIndex} width="69" height="69" alt="" src={images[index.rightIndex]} key={index.rightIndex} />);
            slider.push(<button key="rightCarousel" onClick={this.rightClick} className="slide-arrow slide-right" />);
        } else {
          // Show 1 or 2 Images
            slider.push(<button className="slide-left hidden" />);
            images.forEach((image, i) => {
                slider.push(<ImagePreLoader width="69" height="69" alt="" key={i} src={image} />);
            });
            slider.push(<button className="slide-right hidden" />);
        }
        return slider;
    }

    render() {
        const images = this.props.images || [];
        const width = '400px';
        const height = '400px';
        const slider = this.previewSlider();
        if (images.length > 0) {
            return (<div className="carousel-container">
              <div className="display-img-wrapper" style={{ width, height }}>
                <ImagePreLoader
                    width="400"
                    height="400"
                    alt=""
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    onMouseMove={this.handleMouseMove}
                    src={images[this.state.displayIndex]}
                />
              </div>
              <div className="view-larger">
                <span className="view-larger-text">view larger</span>
              </div>
              <div className="carousel-button-container">
                {slider}
              </div>
            </div>);
        }
        return (<div />);
    }
}

export default Carousel;
