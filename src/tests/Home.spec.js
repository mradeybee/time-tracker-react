import React from 'react'
import { Home } from '../components/Home'
import { mount } from 'enzyme'
import { 
  itBehavesLikeLogInForm,
  itBehavesLikeSignUpForm
} from './shared_examples/sharedFormExamples'

describe('Login Form <Home />', () => {
  
  it('Shows Login Form when user is not logged in', () => {
    const wrapper = mount(<Home auth={{user: {}}} />)
    
    itBehavesLikeLogInForm(wrapper)
  })
})

describe('Sign Up Form <Home />', () => {
  it('Shows Sign Up Form', () => {
    const wrapper = mount(<Home auth={{user: {}}} />)
    wrapper.setState({ formType: 'signup' })
    
    itBehavesLikeSignUpForm(wrapper)
  })
})
