import React from "react";
import { Link, browserHistory } from "react-router";
import Helmet from "react-helmet";

import RaisedButton from "material-ui/RaisedButton";
import FontIcon from "material-ui/FontIcon";
import Paper from "material-ui/Paper";

class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 text-xs-center">
          <Helmet title="Home" />
          <Paper>
            <br />
            <br />
            <h2>
              Create and share polls, fast and easy. View results in real time!
            </h2>
            <br />
            <br />
            <Link to="/polls/login">
              <RaisedButton
                label="Login with Email"
                secondary={true}
                icon={<FontIcon className="fa fa-envelope-o" />}
                className="buttonWidth"
              />
            </Link>
            <br />
            <br />
            <Link to="/polls/signup">
              <RaisedButton
                label="Sign Up"
                primary={true}
                className="buttonWidth"
              />
            </Link>
            <br />
            <br />
            <br />
            <br />
          </Paper>
        </div>
      </div>
    );
  }
}

export default Home;
