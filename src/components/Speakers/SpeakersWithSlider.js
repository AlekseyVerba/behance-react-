import React from "react"

import { Swiper, SwiperSlide } from 'swiper/react';

import RustamImg from "../../assets/img/rustam/1.jpg"
import RustamImgTwo from "../../assets/img/rustam/2.jpg"
import RustamImgThree from "../../assets/img/rustam/3.jpg"
import RustamImgFour from "../../assets/img/rustam/4.jpg"
import RustamImgFive from "../../assets/img/rustam/5.jpg"
import RustamImgSix from "../../assets/img/rustam/6.jpg"

import VasyaImg from "../../assets/img/vasya/1.jpg"
import VasyaImgTwo from "../../assets/img/vasya/2.jpg"
import VasyaImgSix from "../../assets/img/vasya/6.jpg"
import VasyaImgThree from "../../assets/img/vasya/3.jpg"
import VasyaImgFour from "../../assets/img/vasya/4.jpg"
import VasyaImgFive from "../../assets/img/vasya/5.jpg"

import RomaImg from "../../assets/img/roma/1.jpg"
import RomaImgTwo from "../../assets/img/roma/2.jpg"
import RomaImgSix from "../../assets/img/roma/6.jpg"
import RomaImgThree from "../../assets/img/roma/3.jpg"
import RomaImgFour from "../../assets/img/roma/4.jpg"
import RomaImgFive from "../../assets/img/roma/5.jpg"

import lojkinaImg from "../../assets/img/lojkina/1.jpg"
import lojkinaImgTwo from "../../assets/img/lojkina/2.jpg"
import lojkinaImgSix from "../../assets/img/lojkina/6.jpg"
import lojkinaImgThree from "../../assets/img/lojkina/3.jpg"
import lojkinaImgFour from "../../assets/img/lojkina/4.jpg"
import lojkinaImgFive from "../../assets/img/lojkina/5.jpg"

import redisonImg from "../../assets/img/redison/1.jpg"
import redisonImgTwo from "../../assets/img/lojkina/2.jpg"
import redisonImgSix from "../../assets/img/lojkina/6.jpg"
import redisonImgThree from "../../assets/img/lojkina/3.jpg"
import redisonImgFour from "../../assets/img/lojkina/4.jpg"
import redisonImgFive from "../../assets/img/lojkina/5.jpg"
import { Component } from "react"



class Speakers extends Component {
    render() {
        const {classSpeakersBlock, classSpeakersItem,
                classSpeakersItems, speakersComponentAnimationEnd,
                itemsAnimationEnd, mainBlockSpeakersRef, 
                innerBlockSpeakersRef, wheelPage} = this.props
        return (
            <div ref={mainBlockSpeakersRef} className={`screen z-4 ${classSpeakersBlock}`} id="speakers">
                <div onWheel={wheelPage} ref={innerBlockSpeakersRef} className="screen__inner screen__inner_default screen__inner_noise">
                    <div onAnimationEnd={speakersComponentAnimationEnd} className={`speakers ${classSpeakersItem}`}>
                        <h2 className="title text-center">?????????????? 5 ???? 5</h2>
                        {/* <div className="speakers__container swiper-container"> */}
                            {/* <div className="speakers__list swiper-wrapper"> */}
                            <Swiper >
                                <SwiperSlide>
                                <div className={`speakers__item  ${classSpeakersItems}`}>
                                    <div className="speaker">
                                        <div className="speaker__img">
                                            <img src={RustamImg} className="speaker__img-fake" />
                                            <div className="img-glitch speaker__img-glitch">
                                                <div className="img-glitch__white"></div>
                                                <div className="img-glitch__red"><img src={RustamImg} alt="" /></div>
                                                <div className="img-glitch__green"><img src={RustamImg} alt="" /></div>
                                                <div className="img-glitch__blue"><img src={RustamImg} alt="" /></div>
                                            </div>
                                            <img src={RustamImgTwo} className="speaker__img-hover" />
                                            <img src={RustamImgThree} className="speaker__img-hover" />
                                            <img src={RustamImgFour} className="speaker__img-hover" />
                                            <img src={RustamImgFive} className="speaker__img-hover"/>
                                            <img src={RustamImgSix} className="speaker__img-hover"/>
                                        </div>
                                        <div className="speaker__info">
                                            <h3 className="speaker__name">???????????? ????????????????</h3>
                                            <p className="speaker__text-block">
                                                <strong>???????????? ??????</strong><br></br>
                                            </p>
                                            <p className="speaker__text-block">
                                                <strong>????????????-??????????:</strong> ?????????????????? ?? ???????????????????????? ??????????
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className={`speakers__item  ${classSpeakersItems}`}>
                                    <div className="speaker">
                                        <div className="speaker__img">
                                            <img src={VasyaImg} className="speaker__img-fake" />
                                            <div className="img-glitch speaker__img-glitch">
                                                <div className="img-glitch__white"></div>
                                                <div className="img-glitch__red"><img src={VasyaImg} alt=""/></div>
                                                <div className="img-glitch__green"><img src={VasyaImg} alt=""/></div>
                                                <div className="img-glitch__blue"><img src={VasyaImg} alt="" /></div>
                                            </div>
                                            <img src={VasyaImgTwo} className="speaker__img-hover"/>
                                            <img src={VasyaImgThree} className="speaker__img-hover"/>
                                            <img src={VasyaImgFour} className="speaker__img-hover"/>
                                            <img src={VasyaImgFive} className="speaker__img-hover"/>
                                            <img src={VasyaImgSix} className="speaker__img-hover"/>
                                        </div>
                                        <div className="speaker__info">
                                            <h3 className="speaker__name">?????????????? ??????????????????</h3>
                                            <p className="speaker__text-block">
                                                <strong>??????????????????????</strong>
                                            </p>
                                            <p className="speaker__text-block">
                                                <strong>????????:</strong> ?????? ???? ???????????????????? ?? ?????????????? ???? ??????????
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                <div className={`speakers__item  ${classSpeakersItems}`}>
                                    <div className="speaker">
                                        <div className="speaker__img">
                                            <img src={RomaImg} className="speaker__img-fake"/>
                                            <div className="img-glitch speaker__img-glitch">
                                                <div className="img-glitch__white"></div>
                                                <div className="img-glitch__red"><img src={RomaImg} alt=""/></div>
                                                <div className="img-glitch__green"><img src={RomaImg} alt=""/></div>
                                                <div className="img-glitch__blue"><img src={RomaImg} alt=""/></div>
                                            </div>
                                            <img src={RomaImgTwo} className="speaker__img-hover"/>
                                            <img src={RomaImgThree} className="speaker__img-hover"/>
                                            <img src={RomaImgFour} className="speaker__img-hover"/>
                                            <img src={RomaImgFive} className="speaker__img-hover"/>
                                            <img src={RomaImgSix} className="speaker__img-hover"/>
                                            <img src={RomaImg} className="speaker__img-hover"/>
                                        </div>
                                        <div className="speaker__info">
                                            <h3 className="speaker__name">???????? ??????????????????</h3>
                                            <p className="speaker__text-block">
                                                <strong>????????????????</strong>
                                            </p>
                                            <p className="speaker__text-block">
                                                <strong>????????:</strong>  ?????????????????????????? ?????????????????????????? ?????????????????? "????????????????". ???????????????????? ?? ??????????????.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className={`speakers__item  ${classSpeakersItems}`}>
                                    <div className="speaker">
                                        <div className="speaker__img">
                                            <img src={redisonImg} className="speaker__img-fake"/>
                                            <div className="img-glitch speaker__img-glitch">
                                                <div className="img-glitch__white"></div>
                                                <div className="img-glitch__red"><img src={redisonImg} alt=""/></div>
                                                <div className="img-glitch__green"><img src={redisonImg} alt=""/></div>
                                                <div className="img-glitch__blue"><img src={redisonImg} alt=""/></div>
                                            </div>
                                            <img src={redisonImgTwo} className="speaker__img-hover"/>
                                            <img src={redisonImgThree} className="speaker__img-hover"/>
                                            <img src={redisonImgFour} className="speaker__img-hover"/>
                                            <img src={redisonImgFive} className="speaker__img-hover"/>
                                            <img src={redisonImgSix} className="speaker__img-hover"/>
                                        </div>
                                        <div className="speaker__info">
                                            <h3 className="speaker__name">???????????? ??????????????????</h3>
                                            <p className="speaker__text-block">
                                                <strong>??????????????????????</strong> Redisoj, ??. ???????????? (???????????? ????????????????????)<br></br>
                                            </p>
                                            <p className="speaker__text-block">
                                                <strong>????????:</strong> ???????????? ?? ????????????????????: ?????? ???????????????? ???????????????? ????????
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div onAnimationEnd={itemsAnimationEnd} className={`speakers__item  ${classSpeakersItems}`}>
                                    <div className="speaker">
                                        <div className="speaker__img">
                                            <img src={lojkinaImg} className="speaker__img-fake"/>
                                            <div className="img-glitch speaker__img-glitch">
                                                <div className="img-glitch__white"></div>
                                                <div className="img-glitch__red"><img src={lojkinaImg} alt=""/></div>
                                                <div className="img-glitch__green"><img src={lojkinaImg} alt=""/></div>
                                                <div className="img-glitch__blue"><img src={lojkinaImg} alt=""/></div>
                                            </div>
                                            <img src={lojkinaImgTwo} className="speaker__img-hover"/>
                                            <img src={lojkinaImgThree} className="speaker__img-hover"/>
                                            <img src={lojkinaImgFour} className="speaker__img-hover"/>
                                            <img src={lojkinaImgFive} className="speaker__img-hover"/>
                                            <img src={lojkinaImgSix} className="speaker__img-hover"/>
                                        </div>
                                        <div className="speaker__info">
                                            <h3 className="speaker__name">?????????? ??????????????</h3>
                                            <p className="speaker__text-block">
                                                <strong>Easy School</strong>
                                            </p>
                                            <p className="speaker__text-block">
                                                <strong>????????:</strong> ????????????????. ?????????? ?????? ???????????? ?????? ?????????? ?????????????? ??????????????????
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>





                            </Swiper>
                            
                            {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    } 
}


export default Speakers