const initialStateCalendar = (calendarMain ,calendarHead, calendarTitle, calendarDate, calendarSchedule, calendarBg) => {
    return {
        calendarMain,
        calendarHead,
        calendarTitle,
        calendarDate,
        calendarSchedule,
        calendarBg
    }
}

const calendarReducer = (state, actions) => {


    if (state === undefined) {
        return initialStateCalendar("", "", "", "", "") 
    }


    switch(actions.type) {
        case "CHANGE_CLASS_ITEMS_CALENDAR" : {
            return initialStateCalendar(
                                        actions.calendarMain,
                                        actions.calendarHead, 
                                        actions.calendarTitle, 
                                        actions.calendarDate, 
                                        actions.calendarSchedule,
                                        actions.calendarBg
                                    )
        }

        default: {
            return state.calendar
        }
    }
}


export default calendarReducer