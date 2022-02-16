import './Counter_class.css';
import React, { Component } from "react";

class Counter_class extends Component {
    state = {
        count: 0
    }

    increment =() => {
        this.setState({ count: this.state.count + 1 })
    }

    decrement =() => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return(
            <div className="container">
            <h2>Counter App</h2>
            <h3>(Class)</h3>
            <h1>{this.state.count}</h1>
            <div className="buttons">
                <button onClick={this.increment} className="increment">Increment</button>
                <button onClick={this.decrement} className="decrement">Decrement</button>
            </div>

        </div>
        )
    }

}

export {Counter_class};