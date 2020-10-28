import ToUp from "../../components/ToUp";
import FooterRu from "../../components/FooterRu";
import HeaderRu from "../../components/HeaderRu";
import React from 'react'



const DominoOnline = () => {
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
                <h2>Онлайн домино
                </h2>
              </div>
              <div className="content_img">
                <img src="/img/dominoes-online.jpg" alt="Dominoes" />
              </div>
              <div className="content_text">
                Где бесплатно играть в домино, когда возможности собраться дома в компании друзей нет?
                Ответ на этот вопрос кажется сложным только на первый взгляд, поскольку в нашем приложении вы можете играть в домино без регистрации, дополнительных смс
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

export default DominoOnline
