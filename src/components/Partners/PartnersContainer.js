import React from "react"
import { Component } from "react"
import Partners from "./Partners"
import $ from "jquery"




const PartnersContainer = (Wrapper) => {
    return class extends Component {

        state = {
            mainModalId: "",
            logoModalClass: "",
            infoModalClass: "",
            staticClass: ""
        }

        opedModal = (name) => {
            //console.log(name)
            this.setState({
                mainModalId: name,
                logoModalClass: "showIn",
                infoModalClass: "showIn",
                staticClass: "fade"
            })
        }

        closeModal = (e) => {
            if (e.target.classList.contains("partners__modal")) {
                this.setState({
                    mainModalId: "",
                    logoModalClass: "",
                    infoModalClass: "",
                    staticClass: ""
                })
            }
        }

        componentDidMount() {
            if (this.props.activeBlockClass !== "partners" && this.props.activeBlockClass.indexOf("calendar") !== -1 && this.props.activeBlockClass !== "all") {
                setTimeout(() => {
                    this.props.activeBlock("partners")
                }, 1900)
            } else if (this.props.activeBlockClass !== "partners" && this.props.activeBlockClass.indexOf("location") !== -1 && this.props.activeBlockClass !== "all") {
                setTimeout(() => {
                    this.props.activeBlock("partners")
                }, 700)
            }

        }


        mainRef = React.createRef()
        innerRef = React.createRef()


        wheelPage = (e) => {
            //console.log(this.mainRef.current)
            if(this.mainRef.current.classList.contains("active")) {
                var delta = e.nativeEvent.deltaY || e.nativeEvent.detail || e.nativeEvent.wheelDelta;
                var area = this.innerRef.current;
                var scrollTop = $(this.mainRef.current).scrollTop() === 0; 
                var scrollDown = $(this.mainRef.current).scrollTop() + $(this.mainRef.current).outerHeight() >= $(this.innerRef.current).outerHeight();  
                
                if (scrollTop & (delta < 0 && area.scrollTop == 0)) {
                    this.props.activeBlock("calendar partners")
                    this.props.changeClassMainBlockPartners("wait")
                    this.props.changeClassItemsCalendar("animated", "", "", "", "", "slideIn")
        
                }

                if (scrollDown & (delta > 0 && area.scrollHeight - area.clientHeight - area.scrollTop <= 1)) {
                    this.props.activeBlock("location partners")
                    this.props.changeClassMainBlockPartners("wait")
                    this.props.classMainLocation("animated")
                    this.props.classLocationBlock("showIn")
                }
            }
        }

        animationEndTitle = (e) => {
            if (e.animationName === "fadeInDown" && e.target.classList.contains("showIn") && e.target.classList.contains("partners__title")) {
                this.props.changeClassTitlePartners("show")
            }
        }

        animationEndContent = (e) => {
            if (e.animationName === "fadeIn" && e.target.classList.contains("showIn") && e.target.classList.contains("partners__content")) {
                this.props.changeClassContentPartners("show")
                this.props.changeClassListItem("showIn")
            }
        }

        animationEndItems = (e) => {
            //console.log(e)
            if (e.animationName === "fadeInUp" && e.target.classList.contains("showIn") && e.target.classList.contains("partners__list-item")) {
                this.props.changeClassListItem("show")
                this.props.changeClassMainBlockPartners("active")
            }
        }


        render() {
            const {classMain, classTitle, classContent, classListItem} = this.props
            const {mainModalId, logoModalClass, infoModalClass, staticClass} = this.state
            //console.log(this.state)
            return <Wrapper classMain={classMain} 
                            classTitle={classTitle} 
                            classContent={classContent} 
                            classListItem={classListItem}
                            animationEndTitle={this.animationEndTitle}
                            animationEndContent={this.animationEndContent}
                            animationEndItems={this.animationEndItems}
                            mainRef={this.mainRef}
                            innerRef={this.innerRef}
                            wheelPage={this.wheelPage}
                            mainModalId={mainModalId}
                            logoModalClass={logoModalClass}
                            infoModalClass={infoModalClass}
                            staticClass={staticClass}
                            opedModal={this.opedModal}
                            closeModal={this.closeModal}
                        />
        }
    }
}


export default PartnersContainer(Partners)
