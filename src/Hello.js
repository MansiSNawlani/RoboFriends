import React, { Component } from 'react'
import './hello.css'
import HelloFC from './HelloFunctionComponent';
import ReactDOM from 'react-dom'

class Hello extends Component{
    render(){
return(
    <div className='f2 tc'>
        <h1>Hello World</h1>
        <HelloFC greetingFC={'ReactNinja##'}/>
        <p>{this.props.greeting}</p>
    </div>
);
}
}
export default Hello