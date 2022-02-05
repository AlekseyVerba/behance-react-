import React from "react"

import easyImg from "../../assets/img/easy.png"
import dorenbergImg from "../../assets/img/dorenberg.png"
import asbaikalImg from "../../assets/img/asbaikal.png"
import tpcheckotovaImg from "../../assets/img/tpchekova.png"


const Partners = ({classMain, classTitle,
                classContent, classListItem, 
                animationEndTitle, animationEndContent, 
                animationEndItems, mainRef, innerRef,
                wheelPage, mainModalId, logoModalClass,
                infoModalClass, staticClass, opedModal,
                closeModal}) => {
    
    return (
        <div ref={mainRef} className={`screen z-2 ${classMain}`} id="partners">
            <div onWheel={wheelPage} ref={innerRef} className="screen__inner screen__inner_default screen__inner_noise">
                <div className="partners">
                    <div className={`partners__static ${staticClass}`}>
                        <h2 onAnimationEnd={animationEndTitle} className={`title text-center partners__title ${classTitle}`}>Нам помогают</h2>
                        <div className="partners__container">
                            <div className="partners__row">
                                <div onAnimationEnd={animationEndContent} className={`partners__content ${classContent}`}>
                                    <p className="partners__text">Мы выражаем большую благодарность нашим партерам, которые помогают организовать Behance Portfolio Rewiew уже в третий раз!</p>
                                    <p className="partners__text">Выражаем благодарность за информационную поддержку медиахолдингу "АС Байкал ТВ", "Оперативной типографии на Чехова" за помощь в печатных услугах, "Easy School" за помощь в организации мероприятия, а также Арт-заводу "Доренберг" за сотрудничество по предоставлению площади в аренду.</p>
                                </div>
                                <div className="partners__logo">
                                    <div className="partners__list">
                                        <div className={`partners__list-item glitch-on-hover ${classListItem}`}>
                                            <div onClick={() => opedModal("easy")} data-toggle="partner-modal" className="partners__list-icon">
                                                <img src={easyImg} alt="" />
                                            </div>
                                        </div>
                                        <div className={`partners__list-item glitch-on-hover ${classListItem}`}>
                                            <div onClick={() => opedModal("dorenberg")} data-toggle="partner-modal" className="partners__list-icon">
                                                <img src={dorenbergImg} alt=""/>
                                            </div>
                                        </div>
                                        <div className={`partners__list-item glitch-on-hover ${classListItem}`}>
                                            <div onClick={() => opedModal("asbaikal")} data-toggle="partner-modal" className="partners__list-icon">
                                                <img src={asbaikalImg} alt="" />
                                            </div>
                                        </div>
                                        <div onAnimationEnd={animationEndItems} className={`partners__list-item glitch-on-hover ${classListItem}`}>
                                            <div onClick={() => opedModal("tpchekova")} data-toggle="partner-modal" className="partners__list-icon">
                                                <img src={tpcheckotovaImg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="easy" onClick={(e) => closeModal(e)} className={`partners__modal ${mainModalId === "easy" ? 'show' : ''}`}>
                        <div className="partners-modal">
                            <div className={`partner-logo partner-logo_easy partners-modal__logo ${mainModalId === "easy" ? logoModalClass : ''}`}></div>
                            <div className="partners-modal__content">
                                <div className={`partners-modal__info ${mainModalId === "easy" ? infoModalClass : ''}`}>
                                    <p>Easy School – необычная школа. Это не просто языковые курсы, не просто организация. Easy School – это, в первую очередь, люди – увлеченные, целеустремленные, неординарные, неутомимые, ищущие, любящие учиться и не стоящие на месте.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="dorenberg" onClick={(e) => closeModal(e)} className={`partners__modal ${mainModalId === "dorenberg" ? 'show' : ''}`}>
                        <div className="partners-modal">
                            <div className={`partner-logo partner-logo_easy partners-modal__logo ${mainModalId === "dorenberg" ? logoModalClass : ''}`}></div>
                            <div className="partners-modal__content">
                                <div className={`partners-modal__info ${mainModalId === "dorenberg" ? infoModalClass : ''}`}>
                                    <p>Арт-завод «Доренберг» — место для тех, кто горит идеями и желанием развивать свои проекты в атмосфере сотрудничества и взаимной поддержки. Это новое культурное пространство в зданиях пивоваренного завода Ф.Ф. Доренберг — лидера пивоваренной промышленности Иркутска в 19 веке. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="asbaikal" onClick={(e) => closeModal(e)} className={`partners__modal ${mainModalId === "asbaikal" ? 'show' : ''}`}>
                        <div className="partners-modal">
                            <div className={`partner-logo partner-logo_easy partners-modal__logo ${mainModalId === "asbaikal" ? logoModalClass : ''}`}></div>
                            <div className="partners-modal__content">
                                <div className={`partners-modal__info ${mainModalId === "asbaikal" ? infoModalClass : ''}`}>
                                    <p>Ас-Байкал тв - это крупнейший медиахолдинг в Иркутске, и ведущий телеканал нашего города. Каждое утро телезрители региона могут смотреть в прямом эфире единственную местную информационно-развлекательную программу "Утренний коктейль", выпускаемую медиахолдингом. Несколько раз в день в эфир выходят Новости "АС Байкал ТВ".</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tpchekova" onClick={(e) => closeModal(e)} className={`partners__modal ${mainModalId === "tpchekova" ? 'show' : ''}`}>
                        <div className="partners-modal">
                            <div className={`partner-logo partner-logo_easy partners-modal__logo ${mainModalId === "tpchekova" ? logoModalClass : ''}`}></div>
                            <div className="partners-modal__content">
                                <div className={`partners-modal__info ${mainModalId === "tpchekova" ? infoModalClass : ''}`}>
                                    <p>Типография на Чехова более 20 лет на рынке полиграфических услуг. Среди заказчиков Типографии – крупные коммерческие и государственные структуры Иркутской области и других регионов.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Partners