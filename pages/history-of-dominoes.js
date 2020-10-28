import Footer from "../components/Footer";
import Header from "../components/Header";
import React from 'react'

const HistoryOfDominoes = () => {
  const bgImage = {
    backgroundImage: "url('/img/main-bg.jpg')",
    backgroundSize: "cover",
    width:"100%",
    height:"100%"
  }
  return (
    <>
      <Header />
      <div className="wrapper">
        <article className="main" style={bgImage}>
          <div className="global-container">
            <div className="main_content">
              <div className="content_title">
                <h2>Strategy of Dominoes</h2>
              </div>
              <div className="content_img">
                <img src="/img/strategiya-v-domino.jpg" alt="Dominoes" />
              </div>
              <div className="content_text">
                Each experienced player will have their own system of how to win at dominoes.
                And he will sacredly believe that this system is one of the best.
                However, there are a few rules or tips, following which makes your life in the game much easier,
                and the chances of winning increase.
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  )
}

export default HistoryOfDominoes
