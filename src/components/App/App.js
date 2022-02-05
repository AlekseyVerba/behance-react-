import Preloader from "../Preloader/PreloaderContainer"
import Header from "../Header/HeaderContainer"
import Intro from "../Intro/IntroContainerWrapper"
import Overlay from "../Overlay/OverlayWrapperContainer"
import Speakers from "../Speakers/SpeakersContainerWrapper"
import Calendar from "../Calendar/CalendarContainerWrapper"
import Partners from "../Partners/PartnersContainerWrapper"
import Location from "../Location/LocationContainerWrapper"
import ComponentMount from "../ComponentsMount/ComponentMount"
import About from "../About/AboutWrapperContainer"

import "./style.css"




const App = () => {
    return ( 
        <div>   
            <Preloader />
            <Header />
            <Intro />
            <Overlay />
            <About />
            <Speakers />
            <Calendar />
            <Partners />
            <Location />
            <ComponentMount />
        </div>
    )
}

export default App