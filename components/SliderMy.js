import React from "react"
import Slider from "react-slick"
import Link from "next/link";

const SliderMy = () => {
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
              Dyenesh Blocks
            </div>
            <div className="inner_text">The educational game Gyenesh Blocks is a great way to keep your child busy, captivating with really interesting and developing action. Computer games with Dienes blocks are interesting in that the kit does not include a single complete ...</div>
            <div className="inner_link">
              <Link
                href="/blocks-dominoes" as={`/blocks-dominoes`}>
                <a target="_blank">Read more</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="slider_item dark">
          <div className="item_inner">
            <div className="inner_title">
              Classic dominoes
            </div>
            <div className="inner_text">The rules of playing dominoes with a computer are no different from playing live. Depending on the number of players, you are dealt seven dice each if the game starts one on one, and five dice if the game involves three or four players. The remaining stones remain in ...</div>
            <div className="inner_link">
              <Link
                href="/dominoes-rules" as={`/dominoes-rules`}>
                <a target="_blank">Read more</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="slider_item">
          <div className="item_inner">
            <div className="inner_title">
              Dominoes of Five
            </div>
            <div className="inner_text">Domino 5 is one of the most exciting types of board games. Its rules are practically no different from the classic version, with the exception of one "small" nuance. The player's task is not just to throw off all his stones, attaching them to the common ...</div>
            <div className="inner_link">
              <Link
                href="/all-fives-dominoes" as={`/all-fives-dominoes`}>
                <a target="_blank">Read more</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="slider_item dark">
          <div className="item_inner">
            <div className="inner_title">
              Online game mode
            </div>
            <div className="inner_text">Where to play dominoes for free when there is no opportunity to get together at home with friends? The answer to this question seems difficult only at first glance, since in our application you can play dominoes without registration, additional SMS ...</div>
            <div className="inner_link">
              <Link
                href="/dominoes-online" as={`/dominoes-online`}>
                <a target="_blank">Read more</a>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default SliderMy
