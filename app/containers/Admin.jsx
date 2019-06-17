import React, { Component } from 'react';
import PropTypes from 'prop-types';

import fetchWP from '../utils/fetchWP';

import Notice from '../components/notice';

export default class Admin extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <p>No settings for this Plugin. To use this plugin use shortcode [wpr-cards]</p>
        <p>The shortcode uses the following 6 parameters: [wpr-cards title="" title_url="" image_src="" subtitle="" resource_desc="" resource_links=""]</p>
        <p>"resource_desc" and "resource_links" are both strings that have each resource separated by a comma.</p>
        <p>ex: [wpr-cards title="AAUW" title_url="https://www.aauw.org/" image_src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/American_Association_of_University_Women_logo.svg/1920px-American_Association_of_University_Women_logo.svg.png" subtitle="organization" resource_desc="Graduating to a Pay Gap (2012),Why So Few? (2010)" resource_links="http://witi.berkeley.edu/wp-content/uploads/2017/08/Graduating-To-A-Pay-Gap-AAUW-2012.pdf,http://witi.berkeley.edu/wp-content/uploads/2017/08/Why-So-Few-AAUW-2010.pdf"]</p>
        <p>Developed by Antonio Franco using React.js and pangolin's <a href="https://github.com/gopangolin/wp-reactivate">WP Reactivate boilerplate</a> in June 2019.</p>
      </div>
      
    )
    
  }
}

Admin.propTypes = {
  wpObject: PropTypes.object
};