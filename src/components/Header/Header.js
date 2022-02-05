import React from "react"


const Header = ({isNavActive, changeNav, classItemActive, animationEndPageNav, animationEndItem,
                closeNav, changePage}) => {
    return (
        <header className="header">
            <div className="header__inner">
                <a onClick={changeNav} className="header__nav-trigger">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <nav id="nav" onAnimationEnd={animationEndPageNav} className={` page-nav header__nav ${isNavActive}`}>
                    <span onClick={closeNav} className="page-nav__close">✖</span>
                    <div className="page-nav__links">
                        <a onClick={() => changePage("intro")} className={`page-nav__item ${classItemActive}`}><span data-channel="Behance">Behance</span></a>
                        <a onClick={() => changePage("about")} className={`page-nav__item ${classItemActive}`}><span data-channel="О мероприятии">О мероприятии</span></a>
                        <a onClick={() => changePage("speakers")} className={`page-nav__item ${classItemActive}`}><span data-channel="Спикеры">Спикеры</span></a>
                        <a onClick={() => changePage("calendar")} className={`page-nav__item ${classItemActive}`}><span data-channel="Расписание">Расписание</span></a>
                        <a onClick={() => changePage("partners")} className={`page-nav__item ${classItemActive}`}><span data-channel="Партнеры">Партнеры</span></a>
                        <a onClick={() => changePage("location")} onAnimationEnd={animationEndItem} className={`page-nav__item ${classItemActive}`}><span data-channel="Карта">Карта</span></a>
                    </div>
                    <div className="page-nav__dev">
                        <a href="//t-code.ru" target="_blank" style={{"color": "inherit"}}>True.code</a>
                    </div>
                </nav>
                <div className="social header__social">
                    <a href="https://vk.com/behanceirkutsk" target="_blank" className="social__icon social__icon_vk"></a>
                    <a href="https://www.instagram.com/true.code/" target="_blank" className="social__icon social__icon_insta"></a>
                </div>
            </div>
        </header>
    )
}

export default Header