import React from "react"
import { Component } from "react"
import $ from "jquery"

import Intro from "./Intro"


const IntroContainer = (Wrapper) => {
    return class extends Component {

        componentDidMount() {
            if (this.props.activeBlockClass !== "intro" && this.props.activeBlockClass !== "all") {
                setTimeout(() => {
                    this.props.activeBlock("intro")
                }, 1500)
            }
        }


        scrollHead = (e) => {
            const delta = e.deltaY || e.detail || e.nativeEvent.wheelDelta;
            const area = e.target;
            var scrollTop = $(e.target.parentElement).scrollTop() === 0; 
            var scrollDown = $(e.target.parentElement).scrollTop() + $(e.target.parentElement).outerHeight() >= $(e.target).outerHeight();
            if (scrollTop & delta < 0 && area.scrollTop == 0) {
                e.preventDefault();
            }
        
            if (scrollDown & delta > 0 && area.scrollHeight - area.clientHeight - area.scrollTop <= 1) {
                e.preventDefault(); 
                if (this.props.activeItem !== "intro overlay") {
                    this.props.activeBlock("intro overlay")
                }
                this.props.addAnimate()
            }
        }

        changeClassAnimate = () => {

            this.props.changeAnimatate()
        }


        render() {

            const {introFront,introHead,
                headOne, headTwo, headThree, headFour,
                headFive, backBe, backMeet} = this.props
                    return <Wrapper 
                        scrollHead={this.scrollHead}
                        changeClassAnimate={this.changeClassAnimate}
                        introFront={introFront}
                        introHead={introHead}
                        headOne={headOne}
                        headTwo={headTwo}
                        headThree={headThree}
                        headFour={headFour}
                        headFive={headFive}
                        backBe={backBe}
                        backMeet={backMeet}
                    />
                


            }

        
    }
}

export default IntroContainer(Intro)

