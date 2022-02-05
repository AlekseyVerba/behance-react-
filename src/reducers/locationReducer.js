const locationReducer = (state, actions) => {


    if (state === undefined) {
        return {
            classMain: "",
            classLocationBlockName: "",
        }
    }


    switch(actions.type) {
        case "CLASS_MAIN_LOCATION": {
            //console.log(actions.payload)
            return {
                ...state.location,
                classMain: actions.payload
            }
        }

        case "CLASS_LOCATION_BLOCK": {
            return {
                ...state.location,
                classLocationBlockName: actions.payload
            }
        }


        default: {
            return state.location
        }
    }
}


export default locationReducer