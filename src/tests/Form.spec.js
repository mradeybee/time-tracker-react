import React from 'react'
import Form from '../components/Form'
import { mount } from 'enzyme'
import { 
  itBehavesLikeLogInForm,
  itBehavesLikeSignUpForm
} from './shared_examples/sharedFormExamples'

describe('Login <Form />', () => {
  const wrapper = mount(<Form formTitle='Log In' toggleForm={() => {}} />)

  itBehavesLikeLogInForm(wrapper)
})

describe('SignUp <Form />', () => {
  const wrapper = mount(<Form formTitle='Sign Up' toggleForm={() => {}} />)

  itBehavesLikeSignUpForm(wrapper)
})
