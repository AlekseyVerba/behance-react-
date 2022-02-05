// changeClassItemsSpeakers
const initialStateSpeakers = (classSpeakersBlock, classSpeakersItem, classSpeakersItems) => {
    return {
        classSpeakersBlock,
        classSpeakersItem,
        classSpeakersItems
    }
}

const speakersReducer = (state, actions) => {


    if (state === undefined) {
        return initialStateSpeakers("", "", "") 
    }


    switch(actions.type) {
        case "CHANGE_CLASS_ITEMS_SPEAKERS" : {
            return initialStateSpeakers(actions.classSpeakersBlock, actions.classSpeakersItem, actions.classSpeakersItems)
        }

        default: {
            return state.speakers
        }
    }
}


export default speakersReducer