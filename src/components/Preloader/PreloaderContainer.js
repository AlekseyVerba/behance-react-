import React, { Component } from "react"
import Preloader from "./Preloader"
import { connect } from "react-redux"
import compose from "../../utils/compose"


const PreloaderContainer = (Wrapper) => {
    return class extends Component {




        render() {
            if (this.props.heads.isShowPreload) {
                return <Wrapper />
            }

            return null
            
        }
    }
}

const mapStateToProps = ({heads}) => {
    return {heads}
}

export default compose(
    connect(mapStateToProps),
    PreloaderContainer
)(Preloader)