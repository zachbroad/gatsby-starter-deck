import React, { Component } from 'react';
import { navigate } from 'gatsby';
import captain from '../images/captain.gif';
import './styles.css';

class Index extends Component {
  componentDidMount() {
    // navigate(`/1`, { replace: true });
  }

  render() {
      return (
          <div style={{flex: 1}}>
            <img className="gif" src={captain} />
          </div>
      );
  }
}

export default Index;
