import React from "react"

import imgOne from "../../assets/img/t-code.png"
import imgTwo from "../../assets/img/be.png"
import imgThree from "../../assets/img/date.png"


const Intro = ({scrollHead, introFront, introHead, headOne, headTwo, headThree,
                 headFour, headFive,backBe, backMeet, changeClassAnimate}) => {
    return (
        <div className="screen z-7" id="intro">
            <div className="screen__inner screen__inner_default screen__inner_noise" onWheel={scrollHead}>
                <div className="intro">
                    <div className={`front intro__front ${introFront}`}>
                        <div className="leading front__leading">
                            <div className="leading__text">event by</div>
                            <div className="leading__logo"><img src={imgOne} alt="" /></div>
                        </div>
                        <div className={`head intro__head ${introHead}`} >
                            <div className={`head__one ${headOne}`}></div>
                            <div className={`head__two ${headTwo}`}></div>
                            <div className={`head__three ${headThree}`}>
                                <div className="head__eyes"></div>
                            </div>
                            <div className={`head__four ${headFour}`}></div>
                            <div className={`head__five ${headFive}`}></div>
                        </div>
                    </div>
                    <div className="back intro__back">
                        <div className="social back__social">
                            <a href="#" className="social__icon social__icon_vk"></a>
                            <a href="#" className="social__icon social__icon_insta"></a>
                        </div>
                        <div className={`back__be glitch ${backBe}`}>
                            <img src={imgTwo} alt="Bahance logo" />
                        </div>
                        <div onAnimationEnd={changeClassAnimate} className={`back__meet ${backMeet}`} >
                            <div className="back__date-text">25.05<br></br>16:00</div>
                            <div className="back__date">
                                <img src={imgThree} alt="25.05 в 16:00" />
                            </div>
                            <div className="back__location">ул. Баррикад, 51</div>
                        </div>
                    </div>
                </div>	
            </div>
        </div>
    )
}

export default Intro