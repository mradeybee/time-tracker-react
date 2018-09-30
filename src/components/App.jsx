import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logOutUser } from '../actions/authActionCreators'

import '../assets/css/App.css'

export class App extends Component {
  constructor() {
    super()

    this.logOut = this.logOut.bind(this)
  }

  logOut() { this.props.logOutUser(this.props.auth.user) }

  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <span>Time Tracker</span>
          {this.props.auth.user.jwt && <a onClick={this.logOut}>Log Out</a>}
        </header>
        <div className="app-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { logOutUser })(App)
