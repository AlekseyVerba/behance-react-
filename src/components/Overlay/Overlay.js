import React from "react"
import { Component } from "react"
import Img from "../../assets/img/bpr.png"


class Overlay extends Component {
    render() {
        const {classComponentOverlay, 
                classBlockOverlay, 
                classBlockOverlayGlith, 
                classBlockOverlayLogo,
                overlaySlideInXAnimationEnd,
                onWheelBlock,
                overlayInnerRef,
                overlayRef,
                overlayslideOutYAnimationEnd} = this.props

        return (
            
            <div className={`screen z-6 ${classComponentOverlay}`} ref={overlayRef} id="overlay">
                <div onWheel={onWheelBlock} ref={overlayInnerRef} className="screen__inner">
                    <div onAnimationEnd={overlayslideOutYAnimationEnd} className={`overlay ${classBlockOverlay}`} >
                        <div className="overlay__inner">
                            <div className="overlay__content">
                                <img onAnimationEnd={overlaySlideInXAnimationEnd} src={Img} alt="Behance Portfolio Review" className={`overlay__logo ${classBlockOverlayLogo}`}  />
                                <div className={`overlay__glitch glitch ${classBlockOverlayGlith}`} >
                                    <h1 className="overlay__title"><span data-channel="Behance Portfolio Review">Behance Portfolio Review</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Overlay