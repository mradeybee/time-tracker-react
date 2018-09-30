import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from './Form'
import Timer from './Timer'

import {clearFormErrors} from '../actions/formActionCreators'
import {loginUser, signUpUser} from '../actions/authActionCreators'

import '../assets/css/Home.css'

export class Home extends Component {
  constructor() {
    super()

    this.state = {formType: 'login'}

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

    this.props.clearFormErrors()
    this.state.formType === 'login' ? this.props.loginUser(data) : this.props.signUpUser(data)
  }

  toggleForm(event) {
    event.preventDefault()

    this.props.clearFormErrors()

    const formType = this.state.formType === 'login' ? 'signup' : 'login'
    this.setState({formType})
  }

  render() {
    const authoken = this.props.auth.user.jwt

    return (
      <div className="home">
        {
          authoken ?
            <Timer /> :
            <Form
              formType={this.state.formType}
              onSubmit={this.onSubmit}
              toggleForm={this.toggleForm}
              formError={this.props.auth.signUpError || this.props.auth.loginError}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { loginUser, signUpUser, clearFormErrors })(Home)
