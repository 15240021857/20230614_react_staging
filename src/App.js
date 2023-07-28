import {Component} from 'react'
import Counter from './views/Counter'


class App extends Component {
  num = 0

  render() {
    let {num} = this
    return (
      <div className="App">
        <Counter num={num}></Counter>
      </div>
    );
  }
}

export default App;
