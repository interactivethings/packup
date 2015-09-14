import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

const activeStyle = {
  color: 'black',
  textDecoration: 'none'
};

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <Link onlyActiveOnIndex to='/' activeStyle={activeStyle}>Home</Link>
          <Link to='/hello/foo' activeStyle={activeStyle}>Foo</Link>
          <Link to='/hello/bar' activeStyle={activeStyle}>Bar</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};
