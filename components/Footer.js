import React from "react";
import Logo from "./Logo";
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
                <Logo />
              </div>
              <div className="inner_desc">You are ready? Download the app to start playing now!</div>
            </div>
          </div>
          <div className="inner_column btns">
            <div className="column_inner">
              <div className="inner_img">
                <div className="img img_apple">
                  <div className="img img_apple">
                    <a href="https://apps.apple.com/us/app/dominoes-board-game/id1492160489" target="_blank">
                      <img src='/img/apptest.svg' alt="Dominoes" />
                    </a>
                  </div>
                  <div className="img img_google">
                    <a href="https://play.google.com/store/apps/details?id=loppipoppi.dominoes&hl=en" target="_blank">
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
                    href="/en/history-of-dominoes" as={`/en/history-of-dominoes`}>
                    <a target="_blank">About game</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/dominoes-online" as={`/en/dominoes-online`}>
                    <a target="_blank">Dominoes online</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/dominoes-rules" as={`/en/dominoes-rules`}>
                    <a target="_blank">Dominoes classic</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/all-fives-dominoes" as={`/en/all-fives-dominoes`}>
                    <a target="_blank">Dominoes five</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/blocks-dominoes" as={`/en/blocks-dominoes`}>
                    <a target="_blank">Dominoes bloc</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/en/how-to-play-dominoes" as={`/en/how-to-play-dominoes`}>
                    <a target="_blank">Dominoes strategy</a>
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