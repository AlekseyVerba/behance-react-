import introAnimate from "./introAnimate"
import headsReducer from "./headsReducer"
import activeBlockReducer from "./activeBlockReducer"
import aboutReducer from "./aboutReducer"
import speakersReducer from "./speakersReducer"
import calendarReducer from "./calendarReducer"
import partnersReducer from "./partnersReducer"
import locationReducer from "./locationReducer"


const reduce = (state, actions) => {
    return {
        intro: introAnimate(state, actions),
        heads: headsReducer(state, actions),
        activeItem: activeBlockReducer(state, actions),
        about: aboutReducer(state, actions),
        speakers: speakersReducer(state, actions),
        calendar: calendarReducer(state, actions),
        partners: partnersReducer(state, actions),
        location: locationReducer(state, actions)
    }
}

export default reduce