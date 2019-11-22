import React, { Component, Fragment } from 'react'
import {withRouter} from 'react-router-dom'

class submit extends Component {

    
componentDidMount(){
    this.props.history.push('/')
}

    render() {
        return (
            <Fragment>\
                <h1>Form Submitted</h1>
            </Fragment>
        )
    }
}

export default withRouter(submit)