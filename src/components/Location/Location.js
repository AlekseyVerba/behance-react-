import React from "react"
import { Component } from "react"
import Map from "../Map/Map"



class Location extends Component {
    render() {
        const {classMain, classLocationBlockName, animationEndLocationBlock, refMainLocation, refInnerLocation, wheelPage} = this.props
        return (
            <div ref={refMainLocation} className={`screen z-1 ${classMain}`} id="location">
                <div ref={refInnerLocation} onWheel={wheelPage} className="screen__inner screen__inner_default screen__inner_noise">
                    <div onAnimationEnd={animationEndLocationBlock} className={`location ${classLocationBlockName}`}>
                        <h2 className="title location__title text-center">Где?</h2>
                        <div className="location__row">
                            <div className="location__contacts">
                                <div className="partner-logo partner-logo_dorenberg location__logo"></div>
    
                                <div className="place location__place">
                                    <div className="place__title">Арт-завод Доренберг</div>
                                    <div className="place__address">ул. Баррикад, 51</div>
                                </div>
    
    
                                <div className="register location__register">
                                    <div className="register__title text-center">Не забудь<br></br>зарегистрироваться</div>
                                    <div className="register__btn">
                                        <a href="https://goo.gl/forms/EYIf6r8jsHoc1oxB3" target="_blank" className="btn btn_a btn_a-sm">Регистрация</a>
                                        <div className="register__hint">Количество мест ограничено</div>
                                    </div>
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <div className="text-center">
                                        <a href="//t-code.ru" target="_blank" style={{"color": "inherit"}}>True.code</a>
                                    </div>
                                </div>
                            </div>
                            <div id="map" className="location__map">
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Location