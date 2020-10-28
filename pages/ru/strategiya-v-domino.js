import ToUp from "../../components/ToUp";
import FooterRu from "../../components/FooterRu";
import HeaderRu from "../../components/HeaderRu";
import React from 'react'


const StrategiyaVdomino = () => {
  const bgImage = {
    backgroundImage: "url('/img/main-bg.jpg')",
    backgroundSize: "cover",
    width:"100%",
    height:"100%"
  }
  return (
    <>
      <HeaderRu />
      <div className="wrapper">
        <article className="main" style={bgImage}>
          <div className="global-container">
            <div className="main_content">
              <div className="content_title">
                <h2>Стратегия игры в домино</h2>
              </div>
              <div className="content_img">
                <img src="/img/strategiya-v-domino.jpg" alt="Dominoes" />
              </div>
              <div className="content_text">
                У каждого опытного игрока будет своя система выигрыша в домино.
                И он свято поверит, что эта система одна из лучших.
                Однако есть несколько правил или советов, следование которым значительно облегчит вашу жизнь в игре.
                и шансы на победу увеличиваются.
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

export default StrategiyaVdomino
