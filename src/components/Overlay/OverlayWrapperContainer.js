import React, {Component} from "react"
import compose from "../../utils/compose"
import { connect } from "react-redux"
import {activeBlock} from "../../actions/activeBlock"
import {finishAnimate} from "../../actions/introActions"
import OverlayContainer from "./OverlayContainer"
import {goIntro} from "../../actions/introActions"
import {goAbout} from "../../actions/introActions"
import {changeClassItemsAbout} from "../../actions/aboutActions"
import {fromOverlay} from "../../actions/introActions"

const OverlayWrapperContainer = (Wrapper) => {
    return class extends Component {

        render() {
            const {classComponentOverlay, classBlockOverlay,
                classBlockOverlayGlith, classBlockOverlayLogo, 
                activeBlockClass, activeBlock, finishAnimate, 
                goIntro, goAbout,changeClassItemsAbout, fromOverlay} = this.props


           if (activeBlockClass.indexOf("overlay") !== -1 || this.props.activeBlockClass.indexOf("all") !== -1) {
               return <Wrapper 
                   classComponentOverlay={classComponentOverlay}
                   classBlockOverlay={classBlockOverlay}
                   classBlockOverlayGlith={classBlockOverlayGlith}
                   classBlockOverlayLogo={classBlockOverlayLogo}
                   activeBlock={activeBlock}
                   activeBlockClass={activeBlockClass}
                   finishAnimate={finishAnimate}
                   goIntro={goIntro}
                   goAbout={goAbout}
                   changeClassItemsAbout={changeClassItemsAbout}
                   fromOverlay={fromOverlay}
               />
           } else {
               return null
           }

       }
    }
}

const mapDispatchToProps = {
    activeBlock,
    finishAnimate,
    goIntro,
    goAbout,
    changeClassItemsAbout,
    fromOverlay
}

const mapStateToProps = ({intro, activeItem}) => {
    return {
        ...intro,
        ...activeItem
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    OverlayWrapperContainer
)(OverlayContainer)


