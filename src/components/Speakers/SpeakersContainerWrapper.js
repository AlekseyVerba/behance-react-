import React, {Component} from "react"
import compose from "../../utils/compose"
import { connect } from "react-redux"
import {activeBlock} from "../../actions/activeBlock"
import SpeakersContainer from "./SpeakersContainer"
import {changeClassItemsAbout} from "../../actions/aboutActions"
import {changeClassItemsSpeakers} from "../../actions/speakersActions"
import {changeClassItemsCalendar} from "../../actions/calendarActions"

const SpeakersContainerWrapper = (Wrapper) => {
    return class extends Component {


        render() {
            if (this.props.activeBlockClass.indexOf("speakers") !== -1 || this.props.activeBlockClass.indexOf("all") !== -1) {
                return <Wrapper {...this.props} />
            } else {
                return null
            }
            
        }
    }
}

const mapStateToProps = ({activeItem, speakers}) => {
    return {
        ...activeItem,
        ...speakers
    }
}


const mapDispatchToProps = {
    activeBlock,
    changeClassItemsAbout,
    changeClassItemsSpeakers,
    changeClassItemsCalendar
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    SpeakersContainerWrapper
)(SpeakersContainer)