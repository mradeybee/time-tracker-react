import React from 'react'
import Form from '../components/Form'
import { mount } from 'enzyme'
import { 
  itBehavesLikeLogInForm,
  itBehavesLikeSignUpForm
} from './shared_examples/sharedFormExamples'

describe('Login <Form />', () => {
  const wrapper = mount(<Form formType='login' toggleForm={() => {}} />)

  itBehavesLikeLogInForm(wrapper)
})

describe('SignUp <Form />', () => {
  const wrapper = mount(<Form formType='signup' toggleForm={() => {}} />)

  itBehavesLikeSignUpForm(wrapper)
})
