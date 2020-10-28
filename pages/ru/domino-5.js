import ToUp from "../../components/ToUp";
import FooterRu from "../../components/FooterRu";
import HeaderRu from "../../components/HeaderRu";
import React from 'react'



const Domino5 = () => {
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
                <h2>Домино пятёрка</h2>
              </div>
              <div className="content_img">
                <img src="/img/all-fives-dominoes.jpeg" alt="Dominoes" />
              </div>
              <div className="content_text">
                Домино 5 – одна из самых увлекательных разновидностей настольной игры. Её правила практически ничем не отличаются от классического варианта, за исключением одного «маленького» нюанса. Задача игрока не просто сбросить все свои камни, пристроив их к общей
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

export default Domino5
