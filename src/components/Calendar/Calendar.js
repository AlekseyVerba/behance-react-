import React from "react"


import imgHead from "../../assets/img/head.png"
import rustamJpg from "../../assets/img/rustam.jpg"
import trueJpg from "../../assets/img/true.png"
import vasyaJpg from "../../assets/img/vasya.jpg"
import tehdirImg from "../../assets/img/tehdir.png"
import lojkinaImg from "../../assets/img/lojkina.jpg"
import personLogoImg from "../../assets/img/person-logo.png"
import romaImg from "../../assets/img/roma.jpg"
import buhta from "../../assets/img/buhta.png"
import redisonImg from "../../assets/img/redison.jpg"
import rediskaImg from "../../assets/img/rediska.png"
import { Component } from "react"


class Calendar extends Component {
    render() {
        const {calendarBg, calendarDate, 
            calendarHead, calendarMain, 
            calendarSchedule, calendarTitle, 
            animationEndCalendarBg, animationEndCalendarHead,
            mainBlockRef, innerBlockRef, wheelPage, animationEndCalendarSchedule,
            animationEndCalendarDate, animationEndCalendarTitle, idItem, 
            itemClass, nextItem, itemTimeClass ,itemTextClass, 
            itemInfoBgClass, itemInfoTextClass, itemPreviewClass, itemPersonClass,
            nextClass, prevClass, prevItem} = this.props
            //console.log(idItem)
        return (
            <div ref={mainBlockRef} className={`screen z-3 ${calendarMain}`} id="calendar">
                <div ref={innerBlockRef} onWheel={wheelPage} className="screen__inner screen__inner_calendar">
                    <div className="calendar">
                        <div onAnimationEnd={animationEndCalendarBg} className={`calendar__bg ${calendarBg}`}></div>
                        <div onAnimationEnd={animationEndCalendarHead} className={`calendar__head ${calendarHead}`}>
                            <img src={imgHead} alt="" />
                        </div>
                        <h2 onAnimationEnd={animationEndCalendarTitle} className={`title title_dark calendar__title text-center ${calendarTitle}`}>Что и когда?</h2>
                        <div onAnimationEnd={animationEndCalendarDate} className={`calendar__date text-center ${calendarDate}`}>25 мая</div>
                        <div onAnimationEnd={animationEndCalendarSchedule} className={`calendar__schedule ${calendarSchedule}`}>
                            <div className="timeline calendar__timeline">
                                <div  data-id={1} className={`timeline__item ${idItem === 1 ? itemClass : ""}`}>
                                    <div className={`timeline__time ${idItem === 1 ? itemTimeClass : ""}`}>16:00</div>
                                    <div className={`timeline__text ${idItem === 1 ? itemTextClass : ""}`}>Регистрация</div>
                                </div>
                                <div data-id={2} className={`timeline__item timeline__item_speaker ${idItem === 2 ? itemClass : ""}`}>
                                    <div className={`timeline__time ${idItem === 2 ? itemTimeClass : ""}`}>16:30</div>
                                    <div className="timeline__row">
                                        <div className={`person timeline__person ${idItem === 2 ? itemPersonClass : ""}`}>
                                            <div className="img-glitch person__img">
                                                <div className="img-glitch__white"></div>
                                                <div className="img-glitch__red"><img src={rustamJpg} alt=""/></div>
                                                <div className="img-glitch__green"><img src={rustamJpg} alt=""/></div>
                                                <div className="img-glitch__blue"><img src={rustamJpg} alt=""/></div>
                                            </div>
                                            <div className="person__name">Рустам Кутубаев</div>
                                            <div className="person__logo">
                                                <img src={trueJpg} alt=""/>
                                            </div>
                                        </div>
                                        <div className="timeline__content">
                                            <div className="timeline__info">
                                                <div className={`timeline__info-bg ${idItem === 2 ? itemInfoBgClass : ""}`}></div>
                                                <p className={`timeline__info-text ${idItem === 2 ? itemInfoTextClass : ""}`}>Рустам Кутубаев - арт-директор студии true code - проведет интерактивный мастер-класс на тему "Юзибилити в повседневной жизни", а также расскажет о том, насколько важен свежий взгляд на проблему использования продукта.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-id={3} className={`timeline__item timeline__item_speaker ${idItem === 3 ? itemClass : ""}`} >
                                    <div className={`timeline__time ${idItem === 3 ? itemTimeClass : ""}`}>17:00-17:20</div>
                                    <div className="timeline__row">
                                        <div className={`person timeline__person ${idItem === 3 ? itemPersonClass : ""}`}>
                                            <div className="img-glitch person__img">
                                                <div className="img-glitch__white"></div>
                                                <div className="img-glitch__red"><img src={vasyaJpg} alt=""/></div>
                                                <div className="img-glitch__green"><img src={vasyaJpg} alt=""/></div>
                                                <div className="img-glitch__blue"><img src={vasyaJpg} alt=""/></div>
                                            </div>
                                            <div className="person__name">Василий Бердников</div>
                                            <div className="person__logo">
                                                <img src={tehdirImg} alt=""/>
                                            </div>
                                        </div>
                                        <div className="timeline__content">
                                            <div className="timeline__info">
                                                <div className={`timeline__info-bg ${idItem === 3 ? itemInfoBgClass : ""}`}></div>
                                                <p className={`timeline__info-text ${idItem === 3 ? itemInfoTextClass : ""}`}>Василий Бердников - Продукт-дизайнер, сооснователь и арт-дир службы поддержки сайтов «Техдиректор» расскажет, как привлекать внимание к форме и побудить человека к действию, какие трудности возникают с полями на сайтах и как сделать хорошую форму ещё лучше.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-id={4} className={`timeline__item timeline__item_speaker ${idItem === 4 ? itemClass : ""}`}>
                                    <div className={`timeline__time ${idItem === 4 ? itemTimeClass : ""}`}>17:20-17:40</div>
                                    <div className="timeline__row">
                                        <div className={`person timeline__person ${idItem === 4 ? itemPersonClass : ""}`}>
                                            <div className="img-glitch person__img">
                                                <div className="img-glitch__white"></div>
                                                <div className="img-glitch__red"><img src={lojkinaImg} alt=""/></div>
                                                <div className="img-glitch__green"><img src={lojkinaImg} alt=""/></div>
                                                <div className="img-glitch__blue"><img src={lojkinaImg} alt=""/></div>
                                            </div>
                                            <div className="person__name">Алена Ложкина</div>
                                            <div className="person__logo">
                                                <img src={personLogoImg} alt=""/>
                                            </div>
                                        </div>
                                        <div className="timeline__content">
                                            <div className="timeline__info">
                                                <div className={`timeline__info-bg ${idItem === 4 ? itemInfoBgClass : ""}`}></div>
                                                <p className={`timeline__info-text ${idItem === 4 ? itemInfoTextClass : ""}`}>Easy School поделится с нами взглядом на брендинг со стороны клиента и расскажут, зачем необходимо уделять много времени брендингу вашей компании и зачем необходимо время от времени обновлять его.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-id={5} className={`timeline__item ${idItem === 5 ? itemClass : ""}`}>
                                    <div className={`timeline__time ${idItem === 5 ? itemTimeClass : ""}`}>17:40-18:00</div>
                                    <div className={`timeline__text ${idItem === 5 ? itemTextClass : ""}`}>Кофе</div>
                                </div>
                                <div data-id={6} className={`timeline__item ${idItem === 6 ? itemClass : ""}`}>
                                    <div className={`timeline__time ${idItem === 6 ? itemTimeClass : ""}`}>18:00-18:50</div>
                                    <div className={`timeline__text ${idItem === 6 ? itemTextClass : ""}`}>Представление работ для жюри от участников Portfolio Review</div>
                                </div>
                                <div data-id={7} className={`timeline__item timeline__item_speaker ${idItem === 7 ? itemClass : ""}`}>
                                    <div className={`timeline__time ${idItem === 7 ? itemTimeClass : ""}`}>18:00-18:50</div>
                                    <div className="timeline__row">
                                        <div className={`person timeline__person ${idItem === 7 ? itemPersonClass : ""}`}>
                                            <div className="img-glitch person__img">
                                                <div className="img-glitch__white"></div>
                                                <div className="img-glitch__red"><img src={romaImg} alt=""/></div>
                                                <div className="img-glitch__green"><img src={romaImg} alt=""/></div>
                                                <div className="img-glitch__blue"><img src={romaImg} alt=""/></div>
                                            </div>
                                            <div className="person__name">Рома Малинович (Архбухта)</div>
                                            <div className="person__logo">
                                                <img src={buhta} alt="" />
                                            </div>
                                        </div>
                                        <div className="timeline__content">
                                            <div className="timeline__info">
                                                <div className={`timeline__info-bg ${idItem === 7 ? itemInfoBgClass : ""}`}></div>
                                                <p className={`timeline__info-text ${idItem === 7 ? itemInfoTextClass : ""}`}>Роман Малинович - организатор всеросссийского архитектурного фестиваля "Архбухта" - расскажет о своем детище и о том, как интегрировать свои работы с городом.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-id={8} className={`timeline__item timeline__item_speaker ${idItem === 8 ? itemClass : ""}`}>
                                    <div className={`timeline__time ${idItem === 8 ? itemTimeClass : ""}`}>19:10-19:30</div>
                                    <div className="timeline__row">
                                        <div className={`person timeline__person ${idItem === 8 ? itemPersonClass : ""}`}>
                                            <div className="img-glitch person__img">
                                                <div className="img-glitch__white"></div>
                                                <div className="img-glitch__red"><img src={redisonImg} alt=""/></div>
                                                <div className="img-glitch__green"><img src={redisonImg} alt=""/></div>
                                                <div className="img-glitch__blue"><img src={redisonImg} alt=""/></div>
                                            </div>
                                            <div className="person__name">Реддисон</div>
                                            <div className="person__logo">
                                                <img src={rediskaImg} alt=""/>
                                            </div>
                                        </div>
                                        <div className="timeline__content">
                                            <div className="timeline__info">
                                                <div className={`timeline__info-bg ${idItem === 8 ? itemInfoBgClass : ""}`}></div>
                                                <p className={`timeline__info-text ${idItem === 8 ? itemInfoTextClass : ""}`}>Redisoj (Сергей Ключников) - иллюстратор - поделится с нами своим подходом к работе с заказчиками.  По словам Сергея многое из его подхода к работе и работе с клиентом - очевидно, но многие люди, услышав об этом впервые, удивляются.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-id={9} className={`timeline__item ${idItem === 9 ? itemClass : ""}`}>
                                    <div className={`timeline__time ${idItem === 9 ? itemTimeClass : ""}`}>19:30-20:00</div>
                                    <div className={`timeline__text ${idItem === 9 ? itemTextClass : ""}`}>Награждение</div>
                                </div>
                            </div>
                            <div className="calendar__nav">
                                <div onClick={prevItem} className={`btn btn_b calendar__prev ${prevClass}`}>Назад</div>
                                <div onClick={nextItem} className={`btn btn_b calendar__next ${nextClass}`}>Далее</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Calendar