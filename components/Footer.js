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
                      <img src='/img/app-store-en.png' alt="Dominoes" />
                    </a>
                  </div>
                  <div className="img img_google">
                    <a href="https://play.google.com/store/apps/details?id=loppipoppi.dominoes&hl=en" target="_blank">
                      <img src='/img/google-play-badge.png' alt="Dominoes" />
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
                    href="/history-of-dominoes" as={`/history-of-dominoes`}>
                    <a>About game</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dominoes-online" as={`/dominoes-online`}>
                    <a>Dominoes online</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dominoes-rules" as={`/dominoes-rules`}>
                    <a>Dominoes classic</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/all-fives-dominoes" as={`/all-fives-dominoes`}>
                    <a>Dominoes five</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blocks-dominoes" as={`/blocks-dominoes`}>
                    <a>Dominoes bloc</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/how-to-play-dominoes" as={`/how-to-play-dominoes`}>
                    <a>Dominoes strategy</a>
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