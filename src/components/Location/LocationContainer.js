import React, { Component } from "react"
import Location from "./Location"
import $ from "jquery"


const LocationContainer = (Wrapper) => {
    return class extends Component {


        componentDidMount() {
            if (this.props.activeBlockClass !== "location" && this.props.activeBlockClass !== "all") {
                setTimeout(() => {
                    this.props.activeBlock("location")
                }, 600)
            }

        }

        refMainLocation = React.createRef()
        refInnerLocation = React.createRef()

        wheelPage = (e) => {
            var delta = e.nativeEvent.deltaY || e.nativeEvent.detail || e.nativeEvent.wheelDelta;
            var area = this.refInnerLocation.current;
            var scrollTop = $(this.refMainLocation.current).scrollTop() === 0; 
            var scrollDown = $(this.refMainLocation.current).scrollTop() + $(this.refMainLocation.current).outerHeight() >= $(this.refInnerLocation.current).outerHeight();  
            if (scrollTop & delta < 0 && area.scrollTop == 0) {
                this.props.activeBlock("location partners")
        
                // обнуляеем на случай если переход был из меню
                this.props.changeClassTitlePartners("show")
                this.props.changeClassContentPartners("show")
                this.props.changeClassListItem("showIn")
                this.props.changeClassMainBlockPartners("wait")
                this.props.classMainLocation("animated")
                this.props.classLocationBlock("show showOut")
            }
        }

        animationEndLocationBlock = (e) => {
            if (e.animationName === "fadeInUp" && e.target.classList.contains("showIn") && e.target.classList.contains("location")) {
                this.props.classLocationBlock("show")
                this.props.changeClassMainBlockPartners("")
                this.props.classMainLocation("active")
                
            }

            if (e.animationName === "fadeInUp" && e.target.classList.contains("showOut") && e.target.classList.contains("location")) {
                this.props.classMainLocation("")
                this.props.classLocationBlock("")
                this.props.changeClassMainBlockPartners("animated")
            }
        }




        render() {
            const {classMain, classLocationBlockName} = this.props
            //console.log(this.props)
            return <Wrapper classMain={classMain} 
                            classLocationBlockName={classLocationBlockName}
                            animationEndLocationBlock={this.animationEndLocationBlock}
                            refMainLocation={this.refMainLocation}
                            refInnerLocation={this.refInnerLocation}
                            wheelPage={this.wheelPage}
                        />
        }

    }

}


export default LocationContainer(Location)


