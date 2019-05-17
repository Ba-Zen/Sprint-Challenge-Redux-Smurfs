import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, NavLink, withRouter } from "react-router-dom";
import { fetchSmurfs, addSmurf } from "../actions";

import "./App.css";

import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    if (this.props.fetchingSmurfs) return <h2>Loading...</h2>;
    return (
      <div className="App">
        <nav className="nav-bar">
          <h1>-</h1>
          <NavLink to="/">Home</NavLink>
          <h1>-</h1>
          <NavLink to="/add-smurf">Add New Smurf</NavLink>
          <h1>-</h1>
        </nav>

        <Route
          exact
          path="/add-smurf"
          render={props => (
            <SmurfForm
              {...props}
              addSmurf={this.props.addSmurf}
              smurfs={this.props.smurfs}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.props.smurfs} />}
        />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchSmurfs, addSmurf }
  )(App)
);