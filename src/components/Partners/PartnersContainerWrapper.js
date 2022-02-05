import React, {Component} from "react"
import compose from "../../utils/compose"
import { connect } from "react-redux"
import {activeBlock} from "../../actions/activeBlock"
import PartnersContainer from "./PartnersContainer"
import {changeClassMainBlockPartners} from "../../actions/partnersActions"
import {changeClassTitlePartners} from "../../actions/partnersActions"
import {changeClassContentPartners} from "../../actions/partnersActions"
import {changeClassListItem} from "../../actions/partnersActions"
import {changeClassItemsCalendar} from "../../actions/calendarActions"
import {classMainLocation} from "../../actions/locationActions"
import {classLocationBlock} from "../../actions/locationActions"




const PartnersContainerWrapper = (Wrapper) => {
    return class extends Component {


        render() {
            if (this.props.activeBlockClass.indexOf("partners") !== -1 || this.props.activeBlockClass.indexOf("all") !== -1) {
                return <Wrapper {...this.props} />
            } else {
                return null
            }
            
        }
    }
}

const mapStateToProps = ({activeItem, partners}) => {
    return {
        ...activeItem,
        ...partners
    }
}


const mapDispatchToProps = {
    activeBlock,
    changeClassMainBlockPartners,
    changeClassTitlePartners,
    changeClassContentPartners,
    changeClassListItem, 
    changeClassItemsCalendar,
    classMainLocation,
    classLocationBlock
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    PartnersContainerWrapper
)(PartnersContainer)