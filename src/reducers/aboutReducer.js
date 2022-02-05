const initialStateAbout = (classMain = "", classTitle = "", classContainer = "") => {
    return {
        classMain,
        classTitle,
        classContainer
    }
}

const aboutReducer = (state, actions) => {


    if (state === undefined) {
        return initialStateAbout("", "", "") 
    }


    switch(actions.type) {
        case "CHANGE_CLASS_ITEMS_ABOUT" : {
            return initialStateAbout(actions.payload.mainBlockClass, actions.payload.titleClass, actions.payload.containerClass)
        }

        default: {
            return state.about
        }
    }
}


export default aboutReducer