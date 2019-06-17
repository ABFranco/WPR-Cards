import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../components/card';

export default class Widget extends Component {
  render() {
    return (
      <div>
        <Card wpObject={this.props.wpObject} />
      </div>
    );  
  }
}

Widget.propTypes = {
  wpObject: PropTypes.object
};