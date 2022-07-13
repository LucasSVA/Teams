import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div className="counter-box">
                <button type="button " className="btn" onClick={this.props.substract}>-</button>
                <h5>{this.props.count}</h5>
                <button type="btn" className="btn" onClick={this.props.increment}>+</button>
            </div>
        )
    }
}

export default Counter
