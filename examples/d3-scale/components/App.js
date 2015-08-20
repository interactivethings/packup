import React, {Component} from 'react';
import scale from 'd3-scale';

export default class App extends Component {
  render() {
    const s = scale.linear()
      .domain([0, 1])
      .range([0, 70]);

    return (
      <div>
        <h1>Hello, D3</h1>
        <p>{s(0.5)}</p>
      </div>
    );
  }
}
