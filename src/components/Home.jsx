import React, { Component } from 'react';
import '../assets/css/Home.css';
import Form from './Form'
import {loginUser, signUpUser} from '../actionCreators/authActionCreators'
// import { connect } from 'react-redux'

export default class Home extends Component {
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

    this.state.formTitle === 'Log In' ? loginUser(data) : signUpUser(data)
  }

  toggleForm(event) {
    event.preventDefault()

    const form = this.state.formTitle === 'Log In' ? 'Sign Up' : 'Log In'
    this.setState({formTitle: form})
  }

  render() {
    return (
      <div className="Home">
        <Form formTitle={this.state.formTitle} onSubmit={this.onSubmit} toggleForm={this.toggleForm} />
      </div>
    );
  }
}
