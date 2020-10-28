import ToUp from "../components/ToUp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from 'react'

const BlocksDominoes = () => {
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
                <h2>Dominoes Blocks</h2>
              </div>
              <div className="content_img">
                <img src="/img/blocks-dominoes.jpg" alt="Dominoes" />
              </div>
              <div className="content_text">
                he educational game Gyenesh Blocks is a great way to keep your child busy, captivating with really interesting and developing action. Computer games with Dienes blocks are interesting in that the kit does not include a single complete
              </div>
            </div>
          </div>
        </article>
      </div>
      <ToUp />
      <Footer />
    </>
  )
}

export default BlocksDominoes
