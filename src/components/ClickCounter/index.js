import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  clicking = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const count = this.state
    return (
      <div className="bg-container">
        <h1 className="head">
          The Button has been clicked <span className="spam">0</span> times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button className="butt" onClick={this.clicking}>
          click me
        </button>
      </div>
    )
  }
}
export default ClickCounter
