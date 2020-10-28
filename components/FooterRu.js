import React from "react";
import LogoRu from "./LogoRu";
import Link from "next/link";
const Footer = () => {
  const bgImage = {
    backgroundImage: "url('/img/main-bg.jpg')",
    backgroundSize: "cover",
    width:"100%",
    height:"100%"
  }
  return (
    <footer className="footer" style={bgImage}>
      <div className="shadow"></div>
      <div className="global-container">
        <div className="footer_inner">
          <div className="inner_column logotype">
            <div className="column_inner">
              <div className="inner_logo">
                <LogoRu />
              </div>
              <div className="inner_desc">Вы готовы? Скачайте приложение, чтобы начать играть прямо сейчас!</div>
            </div>
          </div>
          <div className="inner_column btns">
            <div className="column_inner">
              <div className="inner_img">
                <div className="img img_apple">
                  <div className="img img_apple">
                    <a href="https://apps.apple.com/us/app/dominoes-board-game/id1492160489" target="_blank">
                      <img src='/img/logo-app-store-long.png' alt="Dominoes" />
                    </a>
                  </div>
                  <div className="img img_google">
                    <a href="https://play.google.com/store/apps/details?id=loppipoppi.dominoes&hl=ru" target="_blank">
                      <img src='/img/logo-gplay.png' alt="Dominoes" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_column navi">
            <div className="column_inner">
              <ul>
                <li>
                  <Link
                    href="/ru/istoriya-domino" as={`/ru/istoriya-domino`}>
                    <a target="_blank">Об игре</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/domino-online" as={`/ru/domino-online`}>
                    <a target="_blank">Домино онлайн</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/domino-klassicheskoe" as={`/ru/domino-klassicheskoe`}>
                    <a target="_blank">Классическое домино</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/domino-5" as={`/ru/domino-5`}>
                    <a target="_blank">Пятёрки</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/domino-bloc" as={`/ru/domino-bloc`}>
                    <a target="_blank">Домино блок</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/ru/strategiya-v-domino" as={`/ru/strategiya-v-domino`}>
                    <a target="_blank">Стратегия игры в домино</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column_inner">
              <ul>
                <li>
                  <a href="http://loppipoppi.com/privacy-policy" target="_blank">Privacy Policy</a>
                </li>
                <li>
                  <a href="http://loppipoppi.com/terms-of-use" target="_blank">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer