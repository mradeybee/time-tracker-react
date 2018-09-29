import React, { Component } from 'react';
import '../assets/css/Form.css';

export default class Form extends Component {
  render() {
    const formTitle = this.props.formTitle
    return (
      <div className='Form'>
        <form ref='form' onSubmit={this.props.onSubmit}>
          <p>{formTitle}</p>
          <input name='email' type='email' placeholder='Email' />
          <input name='password' type='password' placeholder='Password'/>
          <input type='submit' className='submit-btn'/>
          { 
            formTitle === 'Log In' ?  <p>Don't have an account? <a onClick={this.props.toggleForm}>Sign Up</a></p> :
            <p>Already Signed up? <a onClick={this.props.toggleForm}>Log In</a></p>
          }
          <p>{this.props.formError}</p>
        </form>        
      </div>
    );
  }
}
