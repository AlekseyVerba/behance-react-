import React from "react"
import { Component } from "react"
import Calendar from "./Calendar"
import $ from "jquery"

const CalendarContainer = (Wrapper) => {
    return class extends Component {

        state = {
            idItem: 1,
            itemClass: "show",
            itemTimeClass: "show",
            itemTextClass: "show",
            itemInfoBgClass: "",
            itemInfoTextClass: "",
            itemPreviewClass: "",
            itemPersonClass: "",
            nextClass: "show", 
            prevClass: ""
        }

        nextItem = () => {
            this.setState(({idItem}) => {
                let nextButtonClass = "show"
                if (idItem === 8) {
                    nextButtonClass = ""
                }
                return {
                    idItem: idItem + 1,
                    itemClass: "showIn",
                    itemTimeClass: "showIn",
                    itemTextClass: "showIn",
                    itemInfoBgClass: "showIn",
                    itemInfoTextClass: "showIn",
                    itemPreviewClass: "showIn",
                    itemPersonClass: "showIn",
                    nextClass: nextButtonClass,
                    prevClass: "show"
                }
            })
        }

        prevItem = () => {
            //console.log("eee")
            this.setState(({idItem}) => {
                let prevButtonClass = "show"
                if (idItem === 2) {
                    prevButtonClass = ""
                }
                return {
                    idItem: idItem - 1,
                    itemClass: "showIn",
                    itemTimeClass: "showIn",
                    itemTextClass: "showIn",
                    itemInfoBgClass: "showIn",
                    itemInfoTextClass: "showIn",
                    itemPreviewClass: "showIn",
                    itemPersonClass: "showIn",
                    nextClass: "show",
                    prevClass: prevButtonClass
                }
            })
        }

        mainBlockRef = React.createRef()
        innerBlockRef = React.createRef()


        componentDidMount() {
            if (this.props.activeBlockClass !== "calendar" && this.props.activeBlockClass !== "all") {
                setTimeout(() => {
                    this.props.activeBlock("calendar")
                }, 1500)
            }
        }

        animationEndCalendarBg = (e) => {
            if (e.target.classList.contains("showIn") && e.target.classList.contains("calendar__bg") && e.animationName === 'overlay_moveX') {
                    this.props.changeClassItemsCalendar("animated", "showIn", "", "", "", "show")
                    this.props.changeClassItemsSpeakers("", "","")
            }
            if (e.target.classList.contains("showOut") && e.target.classList.contains("calendar__bg") && e.animationName === 'overlay_moveX') {
                //console.log("bg")
                this.props.changeClassItemsCalendar("", "", "", "", "", "")
                // $('#speakers').toggleClass('wait active');
                this.props.changeClassItemsSpeakers("active", "show","show")

            }

            if (e.target.classList.contains("slideOut") && e.target.classList.contains("calendar__bg") && e.animationName === 'overlay_moveY') {
                this.props.changeClassItemsCalendar("", "", "", "", "", "")
                // if(e.originalEvent.animationName === 'overlay_moveY') {
                    this.props.changeClassMainBlockPartners("animated")
                    this.props.changeClassTitlePartners("showIn")
                    this.props.changeClassContentPartners("showIn")
                // }
            }

            if (e.target.classList.contains("slideIn") && e.target.classList.contains("calendar__bg") && e.animationName === 'overlay_moveX') {
                this.props.changeClassItemsCalendar("animated", "showIn", "", "", "", "show")
                this.props.changeClassMainBlockPartners("")
                this.props.changeClassTitlePartners("")
                this.props.changeClassContentPartners("")
                this.props.changeClassListItem("")
                
            }            

        }

        animationEndCalendarHead = (e) => {
            if (e.target.classList.contains("showIn") && e.target.classList.contains("calendar__head") && e.animationName === 'calendar_head') {
                this.props.changeClassItemsCalendar("animated", "show", "showIn", "showIn", "showIn", "show")
            }
            if (e.target.classList.contains("showOut") && e.target.classList.contains("calendar__head") && e.animationName === 'calendar_head') {
                this.props.changeClassItemsCalendar("animated", "", "", "", "", "showOut")
            }
            if (e.target.classList.contains("slideOut") && e.target.classList.contains("calendar__head") && e.animationName === 'calendar_head_out') {
                //console.log("head")
                this.props.changeClassItemsCalendar("animated", "", "", "", "", "slideOut")
            }
            if (e.target.classList.contains("slideIn") && e.target.classList.contains("calendar__head") && e.animationName === 'calendar_head') {
                this.props.changeClassItemsCalendar("animated", "show", "slideIn", "slideIn", "slideIn", "show")
            }
        }

        animationEndCalendarTitle = (e) => {
            if (e.target.classList.contains("showOut") && e.target.classList.contains("calendar__title") && e.animationName === 'fadeInUp') {
                this.props.changeClassItemsCalendar("animated", "showOut", "", "", "", "show")
            }
            if (e.target.classList.contains("slideOut") && e.target.classList.contains("calendar__title") && e.animationName === 'fadeInDown') {
                    //console.log("tt")
                this.props.changeClassItemsCalendar("animated", "slideOut", "", "slideOut", "slideOut", "show")
            }
        }

        animationEndCalendarDate = (e) => {
            if (e.target.classList.contains("showOut") && e.target.classList.contains("calendar__date") && e.animationName === 'fadeInUp') {
                this.props.changeClassItemsCalendar("animated", "showOut", "showOut", "", "", "show")
            }
            if (e.target.classList.contains("slideOut") && e.target.classList.contains("calendar__date") && e.animationName === 'fadeInDown') {
                //console.log("dd")
                this.props.changeClassItemsCalendar("animated", "slideOut", "", "", "slideOut", "show")
            }
        }

        animationEndCalendarSchedule = (e) => {
            if (e.target.classList.contains("showIn") && e.target.classList.contains("calendar__schedule") && e.animationName === 'fadeInUp') {
                this.props.changeClassItemsCalendar("active", "show", "show", "show", "show", "show")
            }

            if (e.target.classList.contains("showOut") && e.target.classList.contains("calendar__schedule") && e.animationName === 'fadeInUp') {
                this.props.changeClassItemsCalendar("animated", "showOut", "showOut", "showOut", "", "show")
            }
            if (e.target.classList.contains("slideOut") && e.target.classList.contains("calendar__schedule") && e.animationName === 'fadeInUp') {
                //console.log("ss")
                this.props.changeClassItemsCalendar("animated", "slideOut", "", "", "slideOut", "show")
            }
            if (e.target.classList.contains("slideIn") && e.target.classList.contains("calendar__schedule") && e.animationName === 'fadeInUp') {
                this.props.changeClassItemsCalendar("active", "slideOut", "show", "show", "slideOut", "show")
            }
        }

        wheelPage = (e) => {
            // //console.log(this.mainBlockRef.current)
            if (this.mainBlockRef.current.classList.contains("active")) {
                var delta = e.nativeEvent.deltaY || e.nativeEvent.detail || e.nativeEvent.wheelDelta;
                var area = this.innerBlockRef.current;
                var scrollTop = $(this.mainBlockRef.current).scrollTop() === 0; 
                var scrollDown = $(this.mainBlockRef.current).scrollTop() + $(this.mainBlockRef.current).outerHeight() >= $(this.innerBlockRef.current).outerHeight();  
                

                if (scrollTop & delta < 0 && area.scrollTop == 0) {
                    this.props.activeBlock("calendar speakers")
                    this.props.changeClassItemsSpeakers("wait", "showIn", "")
                    
                    this.props.changeClassItemsCalendar("animated", "show", "show showOut", "show showOut", "show showOut", "show")
                    // Анимация у предыдущег
                }
                if (scrollDown & delta > 0 && area.scrollHeight - area.clientHeight - area.scrollTop <= 1) {

                    this.props.activeBlock("calendar partners")
                    this.props.changeClassItemsCalendar("animated", "slideOut", "slideOut", "slideOut", "slideOut", "show")
                    this.props.changeClassMainBlockPartners("wait")
                }
            }
        }



        render() {
            const {calendarBg, calendarDate, calendarHead, calendarMain, calendarSchedule, calendarTitle} = this.props
            const {idItem, itemClass, nextClass, prevClass, 
                itemTimeClass, itemTextClass, itemInfoBgClass,
                itemInfoTextClass, itemPreviewClass, itemPersonClass} = this.state
            return <Wrapper 
                        calendarBg={calendarBg}
                        calendarDate={calendarDate}
                        calendarHead={calendarHead}
                        calendarMain={calendarMain}
                        calendarSchedule={calendarSchedule}
                        calendarTitle={calendarTitle}
                        animationEndCalendarBg={this.animationEndCalendarBg}
                        animationEndCalendarHead={this.animationEndCalendarHead}
                        mainBlockRef={this.mainBlockRef}
                        innerBlockRef={this.innerBlockRef}
                        wheelPage={this.wheelPage}
                        animationEndCalendarSchedule={this.animationEndCalendarSchedule}
                        animationEndCalendarDate={this.animationEndCalendarDate}
                        animationEndCalendarTitle={this.animationEndCalendarTitle}
                        idItem={idItem}
                        itemClass={itemClass}
                        nextItem={this.nextItem}
                        nextClass={nextClass}
                        prevClass={prevClass}
                        itemTimeClass={itemTimeClass}
                        itemTextClass={itemTextClass}
                        itemInfoBgClass={itemInfoBgClass}
                        itemInfoTextClass={itemInfoTextClass}
                        itemPreviewClass={itemPreviewClass}
                        itemPersonClass={itemPersonClass}
                        prevItem={this.prevItem}
                    />
        }
    }
}


export default CalendarContainer(Calendar)