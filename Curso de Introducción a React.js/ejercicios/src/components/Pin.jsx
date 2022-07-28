import React from 'react'
import pinned from "../assets/images/pinned.png"
import notPinned from "../assets/images/not-pinned.png"

class Pin extends React.Component {
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
    }
    render() {
        return (
            <button onClick={this.handlePin}><img src={this.state.isPinned} alt="Check Box" /></button>
        )
    }
}

export { Pin }