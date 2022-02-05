import React from "react"
import { Component } from "react"
import IntroContainer from "./IntroContainer"
import {addAnimate} from "../../actions/introActions"
import {changeAnimatate} from "../../actions/headsActions"
import {activeBlock} from "../../actions/activeBlock"
import compose from "../../utils/compose"
import { connect } from "react-redux"


const IntroContainerWrapper = (Wrapper) => {
    return class extends Component {

        render() {

            if (this.props.activeBlockClass.indexOf("intro") !== -1 || this.props.activeBlockClass.indexOf("all") !== -1) {

                return <Wrapper {...this.props} />
            } else {
                return null
            }
            
        }
    }
}

const mapStateToProps = ({heads, activeItem}) => {
    return {
        ...heads,
        ...activeItem
    }
}

const mapDispatchToProps = {
    addAnimate,
    changeAnimatate,
    activeBlock
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    IntroContainerWrapper
)(IntroContainer)  