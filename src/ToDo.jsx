import React,{ Component } from "react";

export class ToDo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.data.id} {this.props.data.message}</p>
                <button onClick={() => this.props.deleteEntry(this.props.data.id)}>Delete</button>
            </div>
        )
    }
}