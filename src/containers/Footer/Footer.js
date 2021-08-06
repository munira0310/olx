import "./Footer.css"
import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-dark">
         <div className="container  py-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="d-flex flex-column">
                    <Link to={"/mobileapps"}>Мобильные приложения</Link>
                    <Link to={"/Помощь"}>Помощь</Link>
                    <Link to={"/Платные-услуги"}>Платные-услуги</Link>
                    <Link to={"/biznes-na-olx"}>Бизнес на OLX</Link>
                    <Link to={"/reklama"}>Реклама на сайте</Link>
                    <Link to={"/xizmatlar"}>Условия использования</Link>
                    <Link to={"/politika"}>Политика конфиденциальности</Link>
                    <Link to={"/Партнёры"}>Партнёры</Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                    <div className="d-flex flex-column">
                    <Link to={"/kak-provadat-i-pokupat"}>Как продавать и покупать?</Link>
                    <Link to={"Правила-безопасности"}>Правила безопасности</Link>
                    <Link to={"/Карта-сайта"}>Карта сайта</Link>
                    <Link to={"/Карьер-в-OLX"}>Карьера в OLX</Link>
                    <Link to={"/Карта-сайта"}>Карта сайта</Link>
                    <Link to = {"/Обратная-связь"}>Обратная связь</Link>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <a className="me-3" href="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-footer">
                            <img class="me-3" src="https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg" alt="play market" />
                        </a>
                        <a className="me-3" href="https://itunes.apple.com/uz/app/torg.uz/id665094472?mt=8&ign-mpt=uo%3D4">
                            <img class="me-3" src="https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg" alt="play market" />
                        </a>
                    </div>
                </div>
            </div>
         </div>
        </footer>
    )
}

export default Footer
