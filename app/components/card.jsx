import React from 'react';
import PropTypes from 'prop-types';

import fetchWP from '../utils/fetchWP';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      submitted: false,
      title: props.wpObject.title,
      title_url: props.wpObject.title_url,
      image_src: props.wpObject.image_src,
      subtitle: props.wpObject.subtitle,
      resource_desc: props.wpObject.resource_desc,
      resource_links: props.wpObject.resource_links,
      height: props.wpObject.height
    };

    this.fetchWP = new fetchWP({
        restURL: this.props.wpObject.api_url,
        restNonce: this.props.wpObject.api_nonce,
        });
  }

  

  render() {
    const divStyle = {
      height: this.state.height,
    };
    let descriptions = this.state.resource_desc.split(",");
    let links = this.state.resource_links.split(",");
    var resource_html = [];
    try {
      for (let i = 0; i < links.length; i++) {
          let resource = (
            <a href={links[i]} target="_blank" key={i}>  <p>{descriptions[i]}</p></a>
          );
          resource_html.push(resource);
      };
    } catch (e) {
      this.state.error = e;
    }  

    const card = (
      <div className="wdr-card">
        <div className="wdr-card-top">
          <a href={this.state.title_url} target="_blank">
            <p className="wdr-card-title">{this.state.title}</p>
          </a>
        </div>
        <img className="wdr-card-img" src={this.state.image_src}/>
        <p className="wdr-card-subtitle">{this.state.subtitle}</p>
        <div className="wdr-card-details" style={divStyle}>
          {resource_html}
        </div>
      </div>
    );

    const error = this.state.error ? <p className="error">{this.state.error}</p> : '';

    
      
    return (
      <div>
        {card}
        {error}
      </div>
    );
  }
}

Card.propTypes = {
  wpObject: PropTypes.object
};