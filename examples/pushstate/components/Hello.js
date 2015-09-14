import React, {Component, PropTypes} from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello, {this.props.params.name}!
      </div>
    );
  }
}

Hello.propTypes = {
  params: PropTypes.object.isRequired
};
