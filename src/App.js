// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(console.log)
    }

    render(){
        return(
            <h1>Hey</h1>
        )
    }




}