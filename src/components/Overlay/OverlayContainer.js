import React, { Component } from "react"
import Overlay from "./Overlay"
import $ from "jquery"

const OverlayContainer = (Wrapper) => {
    return class extends Component {


        overlayRef = React.createRef()
        overlayInnerRef = React.createRef()


        componentDidMount() {
            if (this.props.activeBlockClass !== "overlay" && this.props.activeBlockClass !== "all") {
                setTimeout(() => {
                    this.props.activeBlock("overlay")
                }, 800)
            }
        }

        overlayslideOutYAnimationEnd = (e) => {
            if (e.target.classList.contains("slideInY") && e.animationName === "overlay_moveY") {
                // $('#about').removeClass('wait');
                
                this.props.fromOverlay()

            } else {
                if (e.animationName === "overlay_moveY") {
                    this.props.changeClassItemsAbout({
                        mainBlockClass: "animated",
                        titleClass: "showIn",
                        containerClass: "showIn"
                    })
                }
            }

        }

        overlaySlideInXAnimationEnd = (e) => {
            if (e.target.classList.contains("showIn") && e.target.classList.contains("showIn")) {
                this.props.finishAnimate()
            }
        }


        onWheelBlock = (e) => {
            if (this.overlayRef.current.classList.contains("active")) {
                const delta = e.nativeEvent.deltaY || e.nativeEvent.detail || e.nativeEvent.wheelDelta;
                const area = this.overlayInnerRef.current;
                const scrollTop = $(this.overlayRef.current).scrollTop() === 0; 
                const scrollDown = $(this.overlayRef.current).scrollTop() + $(this.overlayRef.current).outerHeight() >= $(this.overlayInnerRef.current).outerHeight();
                if (scrollTop & delta < 0 && area.scrollTop === 0) {
                    // Анимация назад у текущего экрана
                    this.props.activeBlock("intro overlay")
                    this.props.goIntro()
                }
                if (scrollDown & delta > 0 && area.scrollHeight - area.clientHeight - area.scrollTop <= 1) {
                    this.props.activeBlock("about overlay")
                    this.props.goAbout()
                    this.props.changeClassItemsAbout({
                        classMain: "wait",
                        classTitle: "",
                        classContainer: ""
                    })
                    // Анимация у след. экрана
                    // $('#about').addClass('wait');
                }
            }
        
        }

        render() {
            return <Wrapper {...this.props} 
                            overlayRef={this.overlayRef}
                            overlayInnerRef={this.overlayInnerRef}
                            overlaySlideInXAnimationEnd={this.overlaySlideInXAnimationEnd}
                            onWheelBlock={this.onWheelBlock}
                            overlayslideOutYAnimationEnd={this.overlayslideOutYAnimationEnd}
                    />
        }

    }
}


export default OverlayContainer(Overlay)