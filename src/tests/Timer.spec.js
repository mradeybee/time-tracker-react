import React from 'react'
import { Timer } from '../components/Timer'
import expect from 'expect'
import { shallow } from 'enzyme'

describe('<Timer />', () => {
  it('Shows start button when timer is not running', () => {
    const wrapper = shallow(<Timer auth={{user: {jwt: 'valid-token'}}} timer={{userTimes: []}} getUserTimers={() => {}} />)

    expect(wrapper.find('.start').length).toEqual(1)
    expect(wrapper.state('running')).toEqual(false)
  })

  it('Shows stop button timer is running', () => {
    const wrapper = shallow(<Timer auth={{user: {jwt: 'valid-token'}}} timer={{userTimes: []}} getUserTimers={() => {}} />)
    wrapper.setState({ running: true, seconds: 1234 })

    expect(wrapper.state('running')).toEqual(true)
    expect(wrapper.find('.stop').length).toEqual(1)
  })

  it('Shows reset button timer stops running', () => {
    const wrapper = shallow(<Timer auth={{user: {jwt: 'valid-token'}}} timer={{userTimes: []}} getUserTimers={() => {}} />)
    wrapper.setState({ running: false, seconds: 1234 })

    expect(wrapper.find('.reset').length).toEqual(1)
  })

  it('Shows Time log', () => {
    const wrapper = shallow(
      <Timer
        auth={{user: {jwt: 'valid-token'}}}
        timer={{userTimes: [{id: 1, seconds: 1234, start_at: '2018-09-28 19:10:16', stop_at: '2018-09-28 19:10:18'}]}} getUserTimers={() => {}}
      />
    )

    expect(wrapper.find('.time-row').length).toEqual(1)
    expect(wrapper.find('.time-column').at(0).text()).toEqual('1.2s')
    expect(wrapper.find('.time-column').at(1).text()).toEqual('Started at: 09/28/2018 19:10:16')
    expect(wrapper.find('.time-column').at(2).text()).toEqual('Stopped at: 09/28/2018 19:10:18')
  })
})
