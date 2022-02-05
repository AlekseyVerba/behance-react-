import React from "react"
import { Component } from "react"
import SpeakersSlider from "./SpeakersWithSlider"
import Speakers from "./Speakers"
import $ from "jquery"

const SpeakersContainer = (Wrapper, WrapperTwo) => {
    return class extends Component {


        componentDidMount() {
            if (this.props.activeBlockClass !== "speakers" && this.props.activeBlockClass !== "all") {
                setTimeout(() => {

                    //console.log("speakers")
                    this.props.activeBlock("speakers")
                }, 1800)
            }
            // debugger
     
        }

        speakersComponentAnimationEnd = (e) => {
            if (e.animationName === "fadeInUp" && e.target.classList.contains("showIn") && e.target.classList.contains("speakers")) {
                this.props.changeClassItemsSpeakers('animated', 'show', "showIn")
            } else if(e.animationName === "fadeInUp" && e.target.classList.contains("showOut") && e.target.classList.contains("speakers")) {
                //console.log("eee")
                this.props.changeClassItemsSpeakers('', '', "show")
            }
        }

        mainBlockSpeakersRef = React.createRef()
        innerBlockSpeakersRef = React.createRef()

        wheelPage = (e) => {
            if(this.mainBlockSpeakersRef.current.classList.contains("active")) {
                var delta = e.nativeEvent.deltaY || e.nativeEvent.detail || e.nativeEvent.wheelDelta;
                var area = this.innerBlockSpeakersRef.current;
                var scrollTop = $(this.mainBlockSpeakersRef.current).scrollTop() === 0; 
                var scrollDown = $(this.mainBlockSpeakersRef.current).scrollTop() + $(this.mainBlockSpeakersRef.current).outerHeight() >= $(this.innerBlockSpeakersRef.current).outerHeight();  
                
                if (scrollTop & (delta < 0 && area.scrollTop == 0)) {
                    this.props.activeBlock("about speakers")
                    this.props.changeClassItemsAbout({
                        mainBlockClass: "animated slideInY",
                        titleClass: "show",
                        containerClass: "show"
                    })
                    this.props.changeClassItemsSpeakers('wait', 'showOut', "show")
            
                }

                if (scrollDown & (delta > 0 && area.scrollHeight - area.clientHeight - area.scrollTop <= 1)) {
                    this.props.activeBlock("speakers calendar")
                    // обнуляеем на случай если переход был из меню
                    this.props.changeClassItemsCalendar("animated", "", "", "", "", "showIn")

                    this.props.changeClassItemsSpeakers('wait', 'show', "show")
                }
            }
        }


        itemsAnimationEnd = (e) => {
            if (e.animationName === "fadeInRight") { 
                this.props.changeClassItemsSpeakers('active', 'show', "show")
            }  
        }


        render() {
            const {classSpeakersBlock, classSpeakersItem, classSpeakersItems} = this.props
            //console.log(document.documentElement.clientWidth <= 1024 )
            if (document.documentElement.clientWidth >= 1024) {
                //console.log("1")
                return <Wrapper 
                classSpeakersBlock={classSpeakersBlock} 
                classSpeakersItem={classSpeakersItem}
                classSpeakersItems={classSpeakersItems}
                speakersComponentAnimationEnd={this.speakersComponentAnimationEnd}
                itemsAnimationEnd={this.itemsAnimationEnd}
                mainBlockSpeakersRef={this.mainBlockSpeakersRef} 
                innerBlockSpeakersRef={this.innerBlockSpeakersRef}
                wheelPage={this.wheelPage}
                />
            } else {
                //console.log("2")
                return <WrapperTwo
                classSpeakersBlock={classSpeakersBlock} 
                classSpeakersItem={classSpeakersItem}
                classSpeakersItems={classSpeakersItems}
                speakersComponentAnimationEnd={this.speakersComponentAnimationEnd}
                itemsAnimationEnd={this.itemsAnimationEnd}
                mainBlockSpeakersRef={this.mainBlockSpeakersRef} 
                innerBlockSpeakersRef={this.innerBlockSpeakersRef}
                wheelPage={this.wheelPage} />
            }

        }
    }
}


export default SpeakersContainer(Speakers, SpeakersSlider)


