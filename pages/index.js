import ToUp from "../components/ToUp";
import Footer from "../components/Footer";
import SliderAdvantages from "../components/SliderAdvantages";
import SliderMy from "../components/SliderMy";
import Link from "next/link";
import Header from "../components/Header";
import React, { useEffect } from "react"

const IndexPage = () => {
    const bgImage = {
        backgroundImage: "url('/img/main-bg.jpg')",
        backgroundSize: "cover",
        width:"100%",
        height:"100%"
    }

    function highLight () {
        const menuArr = document.querySelectorAll(".advantages .context_list .list_item")
        if (!menuArr.length || menuArr.length === 15) return;
        const slideArr = document.querySelectorAll('.advantages .inner_slides .list_item')
        const active = [...menuArr].find(item => item.classList.contains('active'))
        const activeIndex = +active.getAttribute('data-advantages-item')
        const nextElem = [...menuArr].find(item => (+item.getAttribute('data-advantages-item') - 1) === activeIndex)
        slideArr.forEach(item => item.classList.remove('active'))
        if (menuArr.length === +active.getAttribute('data-advantages-item')) {
            menuArr[0].classList.add('active')
            slideArr[0].classList.add('active')
        } else {
            nextElem.classList.add('active')
            slideArr[activeIndex].classList.add('active')
        }
        active.classList.remove('active')
    }

    useEffect(() => {
        if (window.innerWidth >= 721) {
            setInterval(highLight, 5000)
        }
    }, [])

    return (
      <div className="second">
        <Header />
        <div className="wrapper">
          <article className="hero" style={bgImage}>
              <div className="shadow"></div>
              <div className="global-container">
                  <div className="hero_inner">
                      <div className="inner_content">
                          <h1 className="content_title">Dominoes are a fun way to relax!</h1>
                          <p className="content_text">Dominoes is a popular board game in which players line up a chain of dice that meet in halves with the same number of points.</p>
                          <div className="content_img">
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
                      <div className="inner_img">
                          <img src='/img/phone-domino.png' alt="Domino" />
                      </div>
                  </div>
              </div>
          </article>
          <article className="about">
              <div className="global-container">
                  <div className="about_inner">
                      <div className="inner_img">
                          <img src="/img/domino-box.jpg" alt="Domino" />
                      </div>
                      <div className="inner_content">
                          <h2 className="content_title">
                              <span>Dominoes</span>
                          </h2>
                          <p className="content_text">This game not only develops mathematical skills, but also develops analytical qualities in a person. Therefore, it doesn't matter where and what kind of dominoes you play. The main thing is to get genuine pleasure from the process.</p>
                          <div className="content_link">
                              <a href="/history-of-dominoes">Learn more about Dominoes</a>
                              <img src='/img/right-arrow.png' alt="Dominoes" />
                          </div>
                      </div>
                  </div>
              </div>
          </article>
          <article className="banner" style={bgImage}>
              <div className="shadow"></div>
              <div className="global-container">
                  <div className="banner_inner">
                      <div className="inner_title">How about playing dominoes?</div>
                      <div className="inner_img">
                          <div className="img img_apple">
                              <a href="https://apps.apple.com/us/app/dominoes-board-game/id1492160489" target="_blank">
                                  <img src='/img/apptest.svg' alt="Dominoes" />
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
          </article>

          <article className="game-list">
              <div className="global-container">
                  <div className="list_inner">
                      <SliderMy />
                  </div>
              </div>
          </article>
          <article className="strategy" style={{ backgroundColor: "#fafafa" }}>
              <div className="global-container">
                  <div className="strategy_inner">
                      <div className="inner_img">
                          <img src="/img/domino-strategy.jpg" alt="Domino" />
                      </div>
                      <div className="inner_content">
                          <h2 className="content_title">
                              <span>Domino strategy</span>
                          </h2>
                          <p className="content_text">Each experienced player will have their own system of how to win at dominoes. And he will sacredly believe that this system is one of the best. However, there are a few rules or tips, following which makes your life in the game much easier, and the chances of winning increase.</p>
                          <div className="content_link">
                              <Link
                                href="/how-to-play-dominoes" as={`/en/how-to-play-dominoes`}>
                                  <a target="_blank">Read completely</a>
                              </Link>
                              <img src="/img/right-arrow.png" alt="Dominoes" />
                          </div>
                      </div>
                  </div>
              </div>
          </article>
          <article className="advantages">
              <div className="global-container">
                  <div className="advantages_inner">
                      <div className="inner_context">
                          <div className="context_title">
                              <span>Domino benefits</span>
                          </div>
                          <div className="context_text">Play dominoes for free anytime anywhere! Improve your strategy skills with this classic game</div>
                          <SliderAdvantages />
                      </div>
                      <div className="inner_slides">
                          <ul className={"slides_list "}>
                              <li className="list_item active" data-slider-item="01">
                                  <img
                                    src="/img/advantage-1.jpg"
                                    alt="100% Free to Play"
                                  />
                              </li>
                              <li className="list_item" data-slider-item="02">
                                  <img
                                    src="/img/advantage-2.jpg"
                                    alt="3 versions of Dominoes: Fives, Block or Classic"
                                  />
                              </li>
                              <li className="list_item" data-slider-item="03">
                                  <img
                                    src="/img/advantage-3.jpg"
                                    alt="Play Online or Offline (no internet)"
                                  />
                              </li>
                              <li className="list_item" data-slider-item="04">
                                  <img
                                    src="/img/advantage-4.jpg"
                                    alt="Customize the design of boards and domino tiles!"
                                  />
                              </li>
                              <li className="list_item" data-slider-item="05">
                                  <img
                                    src="/img/advantage-1.jpg"
                                    alt="The ability to play with friends or random opponents!"
                                  />
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </article>
      </div>
          <ToUp />
        <Footer />
      </div>
    )
}

export default IndexPage
