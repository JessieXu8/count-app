import React, { Component } from 'react';

export default class Count extends React.Component{
    constructor(props){
        super (props);
        this.state = {countNum : 0};
    }

    addCount = () => {
        const countNum = this.state.countNum+1;
        this.setState({countNum});
    }

    decCount = () => {
        const countNum = this.state.countNum-1;
        this.setState({countNum});
    }

    render(){
        return(
            <div>
                <button onClick = {this.addCount}>+</button>
                <button onClick = {this.decCount}>-</button>
                {this.state.countNum}
            </div>
        )
    }
}