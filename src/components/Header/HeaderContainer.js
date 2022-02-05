import React, { Component } from "react"
import Header from "./Header"
import { connect } from "react-redux"
import compose from "../../utils/compose"
import {activeBlock} from "../../actions/activeBlock"
import {changeClassItemsAbout} from "../../actions/aboutActions"
import {changeClassItemsSpeakers} from "../../actions/speakersActions"
import {changeClassItemsCalendar} from "../../actions/calendarActions"
import {changeClassMainBlockPartners} from "../../actions/partnersActions"
import {changeClassTitlePartners} from "../../actions/partnersActions"
import {changeClassContentPartners} from "../../actions/partnersActions"
import {classMainLocation} from "../../actions/locationActions"
import {classLocationBlock} from "../../actions/locationActions"


const HeaderContainer = (Wrapper) => {
    return class extends Component {

        state = {
            isNavActive: null,
            classItemActive: null
        }

        changeNav = () => {
            this.setState({
                isNavActive: "showIn",
                classItemActive: null
            })
        }


        animationEndPageNav = (e) => {
            //console.log(e.target)
            if (e.target.classList.contains("showIn")) {
                if (e.nativeEvent.animationName === 'fadeIn') {
                    this.setState({
                        isNavActive: "show",
                        classItemActive: "showIn"
                    })
                }

            } else if (e.target.classList.contains("remove")) {
                this.setState({
                    isNavActive: null,
                    classItemActive: null
                })

            }

        }

        animationEndItem = (e) => {
            if (e.target.classList.contains("showOut")) {
                // debugger
                if(e.nativeEvent.animationName === 'fadeInLeft') {
                    this.setState({
                        isNavActive: "showOut show remove",
                        classItemActive: null,

                    })
                }
            
            } else {
                if (e.nativeEvent.animationName === 'fadeInLeft') {
                    this.setState({
                        classItemActive: "show"
                    })
                }
            }



        }

        closeNav = () => {
            this.setState({
                classItemActive: "show showOut"
            })
        }


        changePage = (namePage) => {
            this.props.activeBlock(namePage)
            this.setState({
                isNavActive: "showOut",
                classItemActive: null
            })
            setTimeout(() => {
                this.setState({
                    isNavActive: 1000,
                    classItemActive: null
                })
            }, 1000)


            switch(namePage) {
                case "about": {
                    this.props.changeClassItemsAbout({mainBlockClass: "", 
                    titleClass:"showIn", 
                    containerClass: "showIn"})
                    break
                }

                case "speakers": {
                    this.props.changeClassItemsSpeakers('wait', 'showIn')
                    break
                }
                
                case "calendar": {
                    this.props.changeClassItemsCalendar("animated", "", "", "", "", "showIn")
                    break
                }

                case "partners": {
                    this.props.changeClassMainBlockPartners("animated")
                    this.props.changeClassTitlePartners("showIn")
                    this.props.changeClassContentPartners("showIn")
                    break
                }

                case "location": {
                    this.props.classMainLocation("animated")
                    this.props.classLocationBlock("showIn")
                    break
                }

                default: {
                    break
                }
            }
        }




        render() {
            const {isNavActive, classItemActive} = this.state
            return (
                <Wrapper isNavActive={isNavActive}  
                        classItemActive={classItemActive}
                        changeNav={this.changeNav}
                        animationEndPageNav={this.animationEndPageNav}
                        animationEndItem={this.animationEndItem}
                        closeNav={this.closeNav}
                        changePage={this.changePage}
                     />
            )
        }
    }
}

const mapDispatchToProps = {
    activeBlock,
    changeClassItemsAbout,
    changeClassItemsSpeakers,
    changeClassItemsCalendar,
    changeClassMainBlockPartners,
    changeClassTitlePartners,
    changeClassContentPartners,
    classMainLocation,
    classLocationBlock
}


export default compose(
    connect(null, mapDispatchToProps),
    HeaderContainer
)(Header)
