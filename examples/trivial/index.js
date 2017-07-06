import React from 'react';
import Link from 'react-router-dom/Link';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import About from './About';
import Multi from './Multi';

class Trivial extends React.Component {
  constructor(props) {
    super(props);
    this.connectedAbout = props.stripes.connect(About);
  }

  render() {
    return (
      <div>
        <this.connectedAbout {...this.props} />
        <p><Link to={`${this.props.match.path}/multi`}>[multi]</Link></p>
        <Switch>
          <Route
            path={`${this.props.match.path}/multi`}
            render={() => <Multi {...this.props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Trivial;
