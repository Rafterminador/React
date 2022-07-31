import React from 'react'
import pinned from "../assets/images/pinned.png"
import notPinned from "../assets/images/not-pinned.png"
import { PinContext } from "../pages/TaskList"

class Pin extends React.Component {
    static contextType = PinContext
    constructor(props) {
        super(props)
        let pin
        if (this.props.props === true) {
            pin = pinned
        } else {
            pin = notPinned
        }
        this.state = {
            isPinned: pin
        }
    }
    handlePin = () => {
        if (this.state.isPinned === pinned) {
            this.setState({ isPinned: notPinned })
        } else {
            this.setState({ isPinned: pinned })
        }
        this.context(this.props.id)
    }
    render() {
        return (
            <button onClick={this.handlePin}><img src={this.state.isPinned} alt="Check Box" /></button>
        )
    }
}

export { Pin }