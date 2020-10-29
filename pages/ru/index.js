import ToUp from "../../components/ToUp";
import FooterRu from "../../components/FooterRu";
import SliderAdvantagesRu from "../../components/SliderAdvantagesRu";
import SliderMyRu from "../../components/SliderMyRu";
import Link from "next/link";
import HeaderRu from "../../components/HeaderRu";
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
      <>
          <HeaderRu />
          <div className="wrapper">
              <article className="hero" style={bgImage}>
                  <div className="shadow"></div>
                  <div className="global-container">
                      <div className="hero_inner">
                          <div className="inner_content">
                              <h1 className="content_title">Домино - это интересный способ отдохнуть!</h1>
                              <p className="content_text">Домино — популярная настольная игра, в которой игроки выстраивают цепь костяшек, соприкасающихся половинками с одинаковым количеством очков.</p>
                              <div className="content_star">
                                  <img src="/img/star-full.png" alt=""/>
                                  <img src="/img/star-full.png" alt=""/>
                                  <img src="/img/star-full.png" alt=""/>
                                  <img src="/img/star-full.png" alt=""/>
                                  <img src="/img/star-empty.png" alt=""/>
                              </div>
                              <div className="content_img">
                                  <div className="img img_apple">
                                      <a href="https://apps.apple.com/us/app/dominoes-board-game/id1492160489" target="_blank">
                                          <img src='/img/logo-app-store-long.png' alt="Dominoes" />
                                      </a>
                                  </div>
                                  <div className="img img_google">
                                      <a href="https://play.google.com/store/apps/details?id=loppipoppi.dominoes&hl=en" target="_blank">
                                          <img src='/img/logo-gplay.png' alt="Dominoes" />
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
                                  <span>Об игре домино</span>
                              </h2>
                              <p className="content_text">
                                  Эта игра не только развивает математические навыки, но и развивает аналитические качества в человеке. Поэтому не важно, где и в какой вид домино вы будете играть. Главное – это получать от процесса неподдельное удовольствие.
                              </p>
                              <div className="content_link">
                                  <a href="/history-of-dominoes">Узнать больше о домино</a>
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
                          <div className="inner_title">Как насчет игры в домино?</div>
                          <div className="inner_img">
                              <div className="img img_apple">
                                  <a href="https://apps.apple.com/us/app/dominoes-board-game/id1492160489" target="_blank">
                                      <img src='/img/logo-app-store-long.png' alt="Dominoes" />
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
              </article>

              <article className="game-list">
                  <div className="global-container">
                      <div className="list_inner">
                          <SliderMyRu />
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
                                  <span>Стратегия игры в домино</span>
                              </h2>
                              <p className="content_text">
                                  У каждого опытного игрока будет своя система, как выиграть в домино. И он будет свято верить в то, что это система одна из самых лучших. Однако, существует несколько правил или советов, следование которым делает вашу жизнь в игре значительно проще, а шансы на выигрыш увеличиваются.
                              </p>
                              <div className="content_link">
                                  <Link
                                    href="/how-to-play-dominoes" as={`/en/how-to-play-dominoes`}>
                                      <a target="_blank">Читать полностью</a>
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
                                  <span>Преимущества домино</span>
                              </div>
                              <div className="context_text">Играйте в домино бесплатно в любое время в любом месте! Улучшите свои стратегические навыки с помощью этой классической игр</div>
                              <SliderAdvantagesRu />
                          </div>
                          <div className="inner_slides">
                              <ul className={"slides_list "}>
                                  <li className="list_item active" data-slider-item="01">
                                      <img
                                        src="/img/advantage-1.jpg"
                                        alt="100 % Бесплатная Игра"
                                      />
                                  </li>
                                  <li className="list_item" data-slider-item="02">
                                      <img
                                        src="/img/advantage-2.jpg"
                                        alt="3 версии Домино: Пятерки, Блок или Классическое"
                                      />
                                  </li>
                                  <li className="list_item" data-slider-item="03">
                                      <img
                                        src="/img/advantage-3.jpg"
                                        alt="Играть Онлайн или Офлайн (без интернета)"
                                      />
                                  </li>
                                  <li className="list_item" data-slider-item="04">
                                      <img
                                        src="/img/advantage-4.jpg"
                                        alt="Настройка дизайна досок и плиток домино!"
                                      />
                                  </li>
                                  <li className="list_item" data-slider-item="05">
                                      <img
                                        src="/img/advantage-1.jpg"
                                        alt="Возможность играть с друзьями или случайными соперниками!"
                                      />
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </article>
          </div>
          <ToUp />
          <FooterRu />
      </>
    )
}

export default IndexPage
