import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../components/card';

export default class Shortcode extends Component {
  render() {
    return (
        <Card wpObject={this.props.wpObject} />
    );
  }
}

Shortcode.propTypes = {
  wpObject: PropTypes.object
};