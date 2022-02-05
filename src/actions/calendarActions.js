export const changeClassItemsCalendar = (calendarMain="" ,calendarHead = "", calendarTitle = "", 
                                        calendarDate = "", calendarSchedule = "", calendarBg) => {
    return {
        type: "CHANGE_CLASS_ITEMS_CALENDAR",
        calendarMain,
        calendarHead, 
        calendarTitle,
        calendarDate,
        calendarSchedule,
        calendarBg
    }
}
