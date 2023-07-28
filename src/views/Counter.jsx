import {Component} from 'react'

class Counter extends Component {
  render() {
    const {num} = this.props
    return 'Counter组件{num}'
  }
}

export default Counter