const initialStateHeads = (isShowPreload = true, introFront = null, introHead = null, headOne = null, headTwo = null, headThree = null,  headFour = null, headFive = null, backBe = null, backMeet = null) => {
    return {

        isShowPreload,
        introFront,
        introHead,
        headOne,
        headTwo,
        headThree,
        headFour,
        headFive,
        backBe,
        backMeet
    }
}

const headsReducer = (state, actions) => {


    if (state === undefined) {
        return initialStateHeads()
    }


    switch(actions.type) {
        case "DOCUMENT_LOAD": { 
                
            return initialStateHeads(false, 'showIn', 'showIn', 'showIn','showIn','showIn','showIn','showIn','showIn','showIn')
        }

        case "CHANGE_ANIMATE_CLASS": {
            return initialStateHeads(false, 'show', 'showIn', 'show','show','show','show','show','show','show')
        }

        default: {
            return state.heads
        }
    }
}


export default headsReducer