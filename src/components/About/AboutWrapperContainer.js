import React from "react"
import compose from "../../utils/compose"
import { connect } from "react-redux"
import {activeBlock} from "../../actions/activeBlock"
import { Component } from "react"
import AboutContainer from "./AboutContainer"
import {changeClassItemsAbout} from "../../actions/aboutActions"
import {goOverlayFromAbout} from "../../actions/introActions"
import {changeClassItemsSpeakers} from "../../actions/speakersActions"

const AboutWrapperContainer = (Wrapper) => {
    return class extends Component {


        render() {

            if (this.props.activeBlockClass.indexOf("about") !== -1 || this.props.activeBlockClass.indexOf("all") !== -1) {
                return <Wrapper {...this.props} />
            } else {
                return null
            }
        }
    }
}

const mapStateToProps = ({activeItem, about}) => {
    return {
        ...activeItem,
        ...about
    }
}

const mapDispatchToProps = {
    activeBlock,
    changeClassItemsAbout,
    goOverlayFromAbout,
    changeClassItemsSpeakers
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AboutWrapperContainer
)(AboutContainer)