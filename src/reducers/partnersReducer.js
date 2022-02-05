const partnersReducer = (state, actions) => {


    if (state === undefined) {
        return {
            classMain: "",
            classTitle: "",
            classContent: "",
            classListItem: ""
        }
    }


    switch(actions.type) {
        case "CHANGE_CLASS_MAIN_BLOCK_PARTNERS": {
            return {
                ...state.partners,
                classMain: actions.payload
            }
        }

        case "CHANGE_CLASS_TITLE_PARTNERS": {
            return {
                ...state.partners,
                classTitle: actions.payload
            }
        }
        case "CHANGE_CLASS_CONTENT_PARTNERS": {
            return {
                ...state.partners,
                classContent: actions.payload
            }
        }

        case "CHANGE_CLASS_LIST_ITEM": {
            return {
                ...state.partners,
                classListItem: actions.payload
            }
        }

        default: {
            return state.partners
        }
    }
}


export default partnersReducer