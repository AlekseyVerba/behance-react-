const initialStateIntro = (componentOverlay,blockOverlay, overlayGlith, overlayLogo) => {
    return {
        classComponentOverlay: componentOverlay,
        classBlockOverlay: blockOverlay,
        classBlockOverlayGlith: overlayGlith,
        classBlockOverlayLogo: overlayLogo,
    }
}

const introAnimate = (state, actions) => {


    if (state === undefined) {
        return initialStateIntro(null, "show", "show", "show") 
    }


    switch(actions.type) {
        case "ADD_ANIMATE": {
            return initialStateIntro("animated", "slideInX", "showIn", "showIn")
        }

        case "FINISH_ANIMATE": {
            return initialStateIntro("active", "show", "show", "show")
        }

        case "GO_INTRO": {
            return initialStateIntro("active", "show slideOutX", "show showOut", "showOut show")
        }

        case "GO_ABOUT": {
            return initialStateIntro("animated", "show slideOutY", "show", "show")
        }

        case "GO_OVERLAY_FROM_ABOUT": {
            return initialStateIntro("animated", "slideInY", "show", "show")
        }

        case "FROM_OVERLAY": {
            return initialStateIntro("active", "show", "show", "show")
        }
        default: {
            return state.intro
        }
    }
}


export default introAnimate