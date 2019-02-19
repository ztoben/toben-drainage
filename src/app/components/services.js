import React, {Component} from 'react';

class Services extends Component {
  render() {
    return (
      <div id="services">
        <h1>Services We Provide</h1>
        <h4>Farm Drainage</h4>
        <ul>
          <li>Install drainage tile, plow in up to 15" dual wall</li>
          <li>Tile repairs</li>
          <li>Jetter service for clearing tile lines</li>
        </ul>

        <h4>Residential/Commercial Drainage</h4>
        <ul>
          <li>Install and repair of foundation drainage</li>
          <li>Downspout tile</li>
        </ul>

        <h4>Septic Systems</h4>
        <ul>
          <li>Install new septics, including conventional and alternative systems</li>
          <li>Repair existing septic systems</li>
          <li>Perform Time of Transfer inspections</li>
          <li>Jetter service for clearing clogged lines</li>
          <li>Sewer camera for diagnostics and locating lines</li>
        </ul>
      </div>
    );
  }
}

export default Services;
