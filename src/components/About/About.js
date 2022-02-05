import React from "react"
import { Component } from "react"

import videoMp from "../../assets/img/video.mp4"
import videoWebm from "../../assets/img/video.webm"

class About extends Component {
    render() {
        const {classTitle, classContainer, classMain, aboutMainBlockAnimationEnd,
             aboutContainerShowInAnimationEnd, wheelPage, aboutInnerRef, aboutRef} = this.props
         return (
            <div ref={aboutRef} onAnimationEnd={aboutMainBlockAnimationEnd} className={`screen screen_about z-5 ${classMain}`} id="about">
                <div ref={aboutInnerRef} onWheel={wheelPage} className="screen__inner screen__inner_about screen__inner_noise">
                    <div className="about">
                        <h2 className={`about__title text-center ${classTitle}`}>Что это?</h2>
                        <div onAnimationEnd={aboutContainerShowInAnimationEnd} className={`about__container ${classContainer}`}>
                            <p>Ежегодные оффлайн-встречи креативного сообщества, которые проходят под официальной эгидой международной платформы Behance.</p> 
                    
                            <p>В этом году тебя ждут крутые спикеры со всего мира, обмен опытом, общение с экспертами и расширение круга профессионального общения!</p>
                    
                            <div className="about__btn">
                                <a href="https://goo.gl/forms/EYIf6r8jsHoc1oxB3" target="_blank" className="btn btn_a">Регистрация</a>
                                <div className="about__hint">Количество мест ограничено</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="screen__video">
                    <video autoPlay loop="" className="fillWidth">
                        <source src={videoMp} type="video/mp4" />
                        <source src={videoWebm} type="video/webm" />
                    </video>
                </div>
            </div>
        )
    }
}

export default About