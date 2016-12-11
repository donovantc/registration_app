import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

/**
 * Container for the application
 */
class App extends Component {
  render() {
    const { app } = styles;
    return (
      <div style={app}>
        <Panel header="">
          {this.props.children}
        </Panel>
      </div>
    );
  }
}

const styles = {
  app: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center'
  }
}

export default App;
