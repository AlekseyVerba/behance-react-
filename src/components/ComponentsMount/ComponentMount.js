import React, { Component } from "react"
import { connect } from "react-redux"
import {documentLoad} from "../../actions/headsActions"
import {activeBlock} from "../../actions/activeBlock"

class ComponentMount extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.documentLoad()
        }, 2000)
        if (document.documentElement.clientWidth <= 1200) {
            setTimeout(() => {
                this.props.activeBlock("all")
            }, 3000)
        }

        
    }

    render() {
        return <></>
    }
}

const mapDispatchToProps = {
    documentLoad,
    activeBlock
}


export default connect(null, mapDispatchToProps)(ComponentMount)

