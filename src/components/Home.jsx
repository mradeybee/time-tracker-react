import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../assets/css/Home.css';
import Form from './Form'
import Timer from './Timer'
import {loginUser, signUpUser} from '../actions/authActionCreators'

export class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {formTitle: 'Log In'}

    this.onSubmit = this.onSubmit.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()
    let data = {}
    const formData = new FormData(event.target)

    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1]
    }

    this.state.formTitle === 'Log In' ? this.props.loginUser(data) : this.props.signUpUser(data)
  }

  toggleForm(event) {
    event.preventDefault()

    const form = this.state.formTitle === 'Log In' ? 'Sign Up' : 'Log In'
    this.setState({formTitle: form})
  }

  render() {
    const authoken = this.props.auth.user.jwt

    return (
      <div className="Home">
        {
          authoken ? <Timer /> :
          <Form
            formTitle={this.state.formTitle}
            onSubmit={this.onSubmit}
            toggleForm={this.toggleForm}
            formError={this.props.auth.signUpError || this.props.auth.loginError}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => ({auth})
export default connect(mapStateToProps, { loginUser, signUpUser })(Home)
