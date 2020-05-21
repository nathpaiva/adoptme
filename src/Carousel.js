/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ['http://placecorgi.com/600/600'];

    if(media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = index => {
    this.setState({
      active: +index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal"/>

        <div className="carousel-smaller">
          {photos.map((photo, index) =>(
            <img
              className={index === active ? 'active' : ''}
              key={photo}
              onClick={this.handleIndexClick.bind(this, index)}
              // data-index={index}
              src={photo}
              alt="animal"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel;
