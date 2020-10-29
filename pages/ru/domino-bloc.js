import ToUp from "../../components/ToUp";
import FooterRu from "../../components/FooterRu";
import HeaderRu from "../../components/HeaderRu";
import React from 'react'


const DominoBlock = () => {
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
                <h2>Игра Блоки Дьенеша</h2>
              </div>
              <div className="content_img">
                <img src="/img/blocks-dominoes.jpg" alt="Dominoes" />
              </div>
              <div className="content_text">
                <h3>Игра Блоки Дьенеша</h3>
                <p>Развивающая игра Блоки Дьенеша – это отличный способ, чтобы занять своего ребёнка, увлекая
                  действительно интересным и развивающим действом.</p>
                  <p>На нашем сайте помимо вариаций игры в домино, мы предлагаем самым маленьким поиграть с
                блоками Дьенеша онлайн. Это экономит деньги, поскольку один такой набор состоящий из 48
                элементов стоит определённых денег. В классический набор входят:</p>
                <ul>
                  <li>Элементы четырёх форм (круг, квадрат треугольник и прямоугольник).</li>
                 <li>Элементы трёх цветов (Красные, жёлтые, синие).</li>
                 <li>Элементы двух размеров (маленькие и большие).</li>
                <li>Фигуры, отличающиеся по толщине (тонкие и толстые).</li>
                </ul>
                    <p>Дидактические игры с блоками Дьенеша интересны тем, что в комплекте нет ни одного полностью
                идентичного элемента. Это позволяет сделать бесконечное множество вариаций, как они могут
                быть сложены в виртуальных руках ваших детей.</p>
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

export default DominoBlock
