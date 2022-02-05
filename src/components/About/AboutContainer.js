import React from "react"
import { Component } from "react"
import About from "./About"
import $ from "jquery"

const AboutContainer = (Wrapper) => {
    return class extends Component {



        componentDidMount() {

            if (this.props.activeBlockClass !== "about" && this.props.activeBlockClass !== "all") {
                setTimeout(() => {
                    //console.log("about")
                    this.props.activeBlock("about")
                }, 1300)
            }
        }

        aboutContainerShowInAnimationEnd = (e) => {
            if (e.animationName === "fadeInUp") {
                this.props.changeClassItemsAbout({
                    mainBlockClass: "active",
                    titleClass: "show",
                    containerClass: "show"
                })
            }
        }

        aboutMainBlockAnimationEnd = (e) => {
            if (e.target.classList.contains("slideOutY") && e.animationName === 'fadeInDown') {
                this.props.changeClassItemsAbout({
                    mainBlockClass: "",
                    titleClass: "",
                    containerClass: ""
                })
                this.props.changeClassItemsSpeakers('animated', 'showIn', "")
                //console.log("отраб")
            } else if (e.target.classList.contains("slideInY") && e.animationName === 'fadeInDown') {
                this.props.changeClassItemsAbout({
                    mainBlockClass: "active",
                    titleClass: "show",
                    containerClass: "show"
                })
                //console.log("срарботала щас")
                this.props.changeClassItemsSpeakers('', '', "")
            }
        }

        aboutRef = React.createRef()
        aboutInnerRef = React.createRef()


        wheelPage = (e) => {
            if(this.aboutRef.current.classList.contains("active")) {
                var delta = e.nativeEvent.deltaY || e.nativeEvent.detail || e.nativeEvent.wheelDelta;
                var area = this.aboutInnerRef.current;
                var scrollTop = $(this.aboutRef.current).scrollTop() === 0; 
                var scrollDown = $(this.aboutRef.current).scrollTop() + $(this.aboutRef.current).outerHeight() >= $(this.aboutInnerRef.current).outerHeight();  
                
                if (scrollTop & delta < 0 && area.scrollTop === 0) {

                    this.props.activeBlock("about overlay")
                    this.props.goOverlayFromAbout()
            
                    // Анимация на текущий экран
                    this.props.changeClassItemsAbout({
                        mainBlockClass: "active wait",
                        titleClass: "show showOut",
                        containerClass: "show showOut"
                    })
                }
                if (scrollDown & delta > 0 && area.scrollHeight - area.clientHeight - area.scrollTop <= 1) {

                    this.props.activeBlock("about speakers")
                    this.props.changeClassItemsAbout({
                        mainBlockClass: "animated slideOutY",
                        titleClass: "show",
                        containerClass: "show"
                    })
                    this.props.changeClassItemsSpeakers('wait', 'showIn', "")
                }
            }

        }


        render() {
            const {classTitle, classContainer, classMain} = this.props
            return <Wrapper
                    classMain={classMain}
                    classTitle={classTitle}
                    classContainer={classContainer}
                    aboutRef={this.aboutRef}
                    aboutInnerRef={this.aboutInnerRef}
                    aboutContainerShowInAnimationEnd={this.aboutContainerShowInAnimationEnd}
                    wheelPage={this.wheelPage}
                    aboutMainBlockAnimationEnd={this.aboutMainBlockAnimationEnd}
                />
        }
    }
}


export default AboutContainer(About)