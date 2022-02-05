import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import React, { Component } from "react"

export default class ErrorBoundry extends Component
{
    state = {
        isError: false
    }

    componentDidCatch() {
        this.setState({
            isError: true
        })
    }


    render() {
        if (this.state.isError) {
            return (
                <ErrorIndicator />
            )
        }

        return this.props.children
    }
}