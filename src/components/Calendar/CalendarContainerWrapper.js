import React, {Component} from "react"
import {activeBlock} from "../../actions/activeBlock"
import compose from "../../utils/compose"
import { connect } from "react-redux"
import CalendarContainer from "./CalendarContainer"
import {changeClassItemsCalendar} from "../../actions/calendarActions"
import {changeClassItemsSpeakers} from "../../actions/speakersActions"
import {changeClassMainBlockPartners} from "../../actions/partnersActions"
import {changeClassTitlePartners} from "../../actions/partnersActions"
import {changeClassContentPartners} from "../../actions/partnersActions"
import {changeClassListItem} from "../../actions/partnersActions"

const CalendarContainerWrapper = (Wrapper) => {
    return class extends Component {

        render() {

            if (this.props.activeBlockClass.indexOf("calendar") !== -1 || this.props.activeBlockClass.indexOf("all") !== -1) {
                return (
                    <Wrapper {...this.props} />
                )
            } else {
                return null
            }

        }
    }
}

const mapStateToProps = ({activeItem ,calendar}) => {
    return {
        ...activeItem,
        ...calendar
    }
}

const mapDispatchToProps = {
    activeBlock,
    changeClassItemsCalendar,
    changeClassItemsSpeakers,
    changeClassMainBlockPartners,
    changeClassTitlePartners,
    changeClassContentPartners,
    changeClassListItem
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    CalendarContainerWrapper
)(CalendarContainer)


