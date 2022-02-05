import React, {Component} from "react"
import compose from "../../utils/compose"
import { connect } from "react-redux"
import {activeBlock} from "../../actions/activeBlock"
import LocationsContainer from "./LocationContainer"
import {classMainLocation} from "../../actions/locationActions"
import {classLocationBlock} from "../../actions/locationActions"
import {changeClassMainBlockPartners} from "../../actions/partnersActions"
import {changeClassTitlePartners} from "../../actions/partnersActions"
import {changeClassContentPartners} from "../../actions/partnersActions"
import {changeClassListItem} from "../../actions/partnersActions"

const LocationContainerWrapper = (Wrapper) => {
    return class extends Component {


        render() {
            if (this.props.activeBlockClass.indexOf("location") !== -1 || this.props.activeBlockClass.indexOf("all") !== -1) {
                return <Wrapper {...this.props} />
            } else {
                return null
            }
            
        }
    }
}

const mapStateToProps = ({activeItem, location}) => {
    return {
        ...activeItem,
        ...location
    }
}


const mapDispatchToProps = {
    activeBlock,
    classMainLocation,
    classLocationBlock,
    changeClassMainBlockPartners,
    changeClassTitlePartners,
    changeClassContentPartners,
    changeClassListItem, 
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    LocationContainerWrapper
)(LocationsContainer)