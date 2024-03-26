import React from 'react'
import { Touch } from '@vkontakte/vkui'

class SwipeCard extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      action: '',
      actionReady: false

    }

    this.startX = 0;
    this.startY = 0;

    this.shiftX = 0;
    this.shiftY = 0;

    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.getCircleRef = this.getCircleRef.bind(this);
  }

  componentDidMount() {
    this.limitX = this.circleRef.offsetLeft * 10;
    this.limitY = this.circleRef.offsetTop;
  }

  onMove(e) {
    const shiftX = this.startX + e.shiftX
    const checkActionReady = () => {
      if (Math.abs(shiftX) > this.limitX * 0.5) {
        this.setState({ actionReady: true })
      } else {
        this.setState({ actionReady: false })
      }
    }

    if (shiftX > 0) {
      if (!this.state.action || this.state.action === 'left') {
        this.setState({ action: 'right' })
      }
      checkActionReady()
    }
    if (shiftX < 0) {
      if (!this.state.action || this.state.action === 'right') {
        this.setState({ action: 'left' })
      }
      checkActionReady()
    }
    this.shiftX = shiftX > this.limitX ? this.limitX : (shiftX < -this.limitX ? -this.limitX : shiftX)

  }

  onEnd(e) {
    if (this.state.actionReady) {
      if (this.state.action === 'left') { this.props.actionLeft() }
      if (this.state.action === 'right') { this.props.actionRight() }
    }
    this.startX = 0
    this.shiftX = 0
    this.setState({ actionReady: false, action: '' })
  }

  getCircleRef(el) { this.circleRef = el };

  get limitExceeded() {
    const { shiftX, shiftY } = this.state;
    return Math.abs(shiftX) >= this.limitX || Math.abs(shiftY) >= this.limitY
  }

  render() {
    return (
      <Touch
        getRootRef={this.getCircleRef}
        onMove={this.onMove}
        onEnd={this.onEnd}
        style={{ transform: `rotate(${this.shiftX / 40000}turn) scale(${1 - Math.abs(this.shiftX / 2000)}) translate(calc(${this.shiftX}px - 0%), 0%)` }}
      >
        {this.props.children}
      </Touch>
    )
  }
}

export default SwipeCard