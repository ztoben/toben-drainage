import React, {Component} from 'react';
import '../style/services.scss';

class Services extends Component {
  render() {
    return (
      <div id="services">
        <h1>Services We Provide</h1>
        <h2>Farm Drainage</h2>
        <ul>
          <li>Install drainage tile, plow in up to 15" dual wall</li>
          <li>Tile repairs</li>
          <li>Jetter service for clearing tile lines</li>
        </ul>

        <h2>Residential/Commercial Drainage</h2>
        <ul>
          <li>Install and repair of foundation drainage</li>
          <li>Downspout tile</li>
        </ul>

        <h2>Septic Systems</h2>
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
