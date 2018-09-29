import React, { Component } from 'react';
import ms from 'pretty-ms'
import moment from 'moment'
import { connect } from 'react-redux'
import '../assets/css/Timer.css';
import { saveTime, getUserTimers } from '../actions/timeActionCreator'

export class Timer extends Component {
  constructor(props){
    super(props)

    this.state = {
      seconds: 0,
      running: false,
      startTime: 0,
      stopTime: 0
    }

    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }

  componentDidMount() {
    this.props.getUserTimers(this.props.auth.user.jwt)
  }

  startTimer() {
    this.setState({ running: true, seconds: this.state.seconds,  startTime: Date.now() - this.state.seconds })
    this.timer = setInterval(() => this.setState({ seconds: Date.now() - this.state.startTime }), 1);
  }

  stopTimer() {
    const stopTime = Date.now()
    this.setState({ running: false, stopTime })
    clearInterval(this.timer)

    const timerDetails = {
      start_at: moment.utc(this.state.startTime),
      stop_at: moment.utc(stopTime),
      seconds: this.state.seconds
    }

    this.props.saveTime(timerDetails, this.props.auth.user.jwt)
  }

  resetTimer() { this.setState({seconds: 0, running: false}) }

  render() {
    return(
      <div className='Timer'>
        <div className='time-runner'>
          <div className='counter'>Timer: {ms(this.state.seconds)}</div>
          {this.state.seconds === 0 && <button onClick={this.startTimer} className='start'>start</button>}
          {(this.state.seconds !== 0 && this.state.running) && <button onClick={this.stopTimer} className='stop'>stop</button>}
          {(this.state.seconds !== 0 && !this.state.running) && <button onClick={this.resetTimer} className='reset'>reset</button>}
        </div>
        <div className='time-table'>
          {this.props.timer.userTimes.map(time => {
            return(
              <div key={time.id} className='time-row'>
                <div className='time-column'>{ms(time.seconds)}</div>
                <div className='time-column'>Started at: {moment.utc(time.start_at).format('MM/DD/YYYY HH:mm:ss') }</div>
                <div className='time-column'>Stopped at: {moment.utc(time.stop_at).format('MM/DD/YYYY HH:mm:ss') }</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({auth, timer}) => ({auth, timer})
export default connect(mapStateToProps, {saveTime, getUserTimers})(Timer)

