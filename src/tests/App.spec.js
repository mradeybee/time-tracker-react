import React from 'react'
import { App } from '../components/App'
import expect from 'expect'
import { shallow } from 'enzyme'

var wrapper = shallow(<App auth={{user: {}}} />)

describe('<App />', () => {
  it('Shows the header text alone when user is not logged in', () => {
    const wrapper = shallow(<App auth={{user: {}}} />)

    expect(wrapper.find('.app-header').text()).toEqual('Time Tracker')
  })

  it('Shows the header text and logout link when user is logged in', () => {
    const wrapper = shallow(<App auth={{user: {jwt: 'valid-token'}}} />)

    expect(wrapper.find('.app-header').text()).toMatch('Log Out')
  })
})
