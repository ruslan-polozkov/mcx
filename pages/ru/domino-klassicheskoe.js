import FooterRu from "../../components/FooterRu";
import HeaderRu from "../../components/HeaderRu";
import React from 'react'



const DominoKlassicheskoe = () => {
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
                <h2>Правила игры в классическое домино
                </h2>
              </div>
              <div className="content_img">
                <img src="/img/dominoes-rules.jpg" alt="Dominoes" />
              </div>
              <div className="content_text">
                Правила игры в домино с компьютером ничем не отличаются от игры вживую.
                В зависимости от количества игроков вам раздаётся по семь костяшек, если игра начинается один на один, и по пять – если в игре участвуют три или четыре игрока.
                Оставшиеся камни остаются в игре.
              </div>
            </div>
          </div>
        </article>
      </div>
      <FooterRu />
    </>
  )
}

export default DominoKlassicheskoe
