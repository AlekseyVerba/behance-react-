const initalStateActiveBlock = (activeBlockClass = "intro") => {
    return {
        activeBlockClass
    }
}


const activeBlockReducer = (state, actions) => {


    if (state === undefined) {
        return initalStateActiveBlock()
    }


    switch(actions.type) {
        case "ACTIVE_BLOCK": { 
                
            return initalStateActiveBlock(actions.payload)
        }

        default: {
            return state.activeItem
        }
    }
}


export default activeBlockReducer