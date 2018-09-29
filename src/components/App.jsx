import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../assets/css/App.css'
import {logOutUser} from '../actions/authActionCreators'

export class App extends Component {
  constructor(props) {
    super(props)

    this.logOut = this.logOut.bind(this)
  }

  logOut() { this.props.logOutUser(this.props.auth.user) }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Time Tracker
          {this.props.auth.user.jwt && <a onClick={this.logOut}>Log Out</a>}
        </header>
        <div className="App-intro">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => ({auth})
export default connect(mapStateToProps, {logOutUser})(App)
