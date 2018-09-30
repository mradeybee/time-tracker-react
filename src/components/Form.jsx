import React, { Component } from 'react'

import '../assets/css/Form.css'

export default class Form extends Component {
  render() {
    const formTitle = this.props.formType === 'login' ? 'Log In' : 'Sign Up'

    return (
      <div className='form-container'>
        <form onSubmit={this.props.onSubmit}>
          <p>{formTitle}</p>
          <input name='email' type='email' placeholder='Email' />
          <input name='password' type='password' placeholder='Password'/>
          <input type='submit' className='submit-btn'/>
          {
            this.props.formType === 'login' ?
              <p className='toggle-form'>Don't have an account? <a onClick={this.props.toggleForm}>Sign Up</a></p> :
              <p className='toggle-form'>Already signed up? <a onClick={this.props.toggleForm}>Log In</a></p>
          }
          <p className='error-message'>{this.props.formError}</p>
        </form>
      </div>
    )
  }
}
