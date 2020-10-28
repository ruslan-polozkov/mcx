import React from "react"
import Slider from "react-slick"
import Link from "next/link";

const SliderMyRu = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slider_item">
          <div className="item_inner">
            <div className="inner_title">
              Блоки Дьенеша
            </div>
            <div className="inner_text">
              Развивающая игра Блоки Дьенеша – это отличный способ, чтобы занять своего ребёнка, увлекая действительно интересным и развивающим действом. Компьютерные игры с блоками Дьенеша интересны тем, что в комплекте нет ни одного полностью
            </div>
            <div className="inner_link">
              <Link
                href="/ru/domino-bloc" as={`/ru/domino-bloc`}>
                <a target="_blank">Узнать больше</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="slider_item dark">
          <div className="item_inner">
            <div className="inner_title">
              Классическое домино
            </div>
            <div className="inner_text">
              Правила игры в домино с компьютером ничем не отличаются от игры вживую. В зависимости от количества игроков вам раздаётся по семь костяшек, если игра начинается один на один, и по пять – если в игре участвуют три или четыре игрока. Оставшиеся камни остаются в
            </div>
            <div className="inner_link">
              <Link
                href="/ru/domino-klassicheskoe" as={`/ru/domino-klassicheskoe`}>
                <a target="_blank">Узнать больше</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="slider_item">
          <div className="item_inner">
            <div className="inner_title">
              Домино Пятерки
            </div>
            <div className="inner_text">
              Домино 5 – одна из самых увлекательных разновидностей настольной игры. Её правила практически ничем не отличаются от классического варианта, за исключением одного «маленького» нюанса. Задача игрока не просто сбросить все свои камни, пристроив их к общей
            </div>
            <div className="inner_link">
              <Link
                href="/ru/domino-5" as={`/ru/domino-5`}>
                <a target="_blank">Узнать больше</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="slider_item dark">
          <div className="item_inner">
            <div className="inner_title">
              Онлайн режим игры
            </div>
            <div className="inner_text">
              Где бесплатно играть в домино, когда возможности собраться дома в компании друзей нет? Ответ на этот вопрос кажется сложным только на первый взгляд, поскольку в нашем приложении вы можете играть в домино без регистрации, дополнительных смс
            </div>
            <div className="inner_link">
              <Link
                href="/ru/domino-online" as={`/ru/domino-online`}>
                <a target="_blank">Узнать больше</a>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default SliderMyRu
