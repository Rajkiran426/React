import { Component } from "react";

class Main extends Component {
    render() {
        return (
            <div>
                <div>{this.props.text}</div>
            </div>
        );
    }
}

export default Main;