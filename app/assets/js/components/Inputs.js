import React, { Component } from 'react';
import { render } from 'react-dom';
import "preact/devtools";
import CircularLoading from 'respinner/lib/circular';
import Button from "./Button";

export default class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: props.text
        };
    }

    updateInputValue(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    clickIt() {
        this.setState({
            inputValue: 'It\'s text!'
        });
    }

    render() {
        return <div>
            <input type={'text'} value={this.state.inputValue} onChange={e => this.updateInputValue(e)} />
            {this.state.inputValue.length > 0 ? <Button onClick={e => this.clickIt()}>{this.state.inputValue}</Button> : null}
            Here's a fun loading thingy. It's loaded as a react component and works because preact-compat is aliased to react.
            <CircularLoading  />
        </div>;
    }
}
