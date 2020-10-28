import React, { useState } from "react"
import Slider from "react-slick"

const SliderAdvantages = () => {
  const [accordionState, accordionSetState] = useState("01")
  const settings = {
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: "linear",
    touchMove: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  }

  function accordionStateChange(event) {
    accordionSetState(event.target.closest(".list_item").dataset.advantagesItem)

    const slidersArr = document.querySelectorAll(".inner_slides .list_item")
    const menuArr = document.querySelectorAll(".context_list .list_item")

    menuArr.forEach(item => item.classList.remove("active"))
    slidersArr.forEach(item => {
      if (item.getAttribute("data-slider-item") === accordionState) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })

    event.target.closest(".list_item").classList.add("active")
  }

  return (
    <ul className="context_list slick-center-wrap">
      <Slider {...settings}>
        <li
          className="list_item active"
          data-advantages-item="01"
          onClick={accordionStateChange}
        >
          <img
            className="item_pic"
            src="/img/advantage-1.jpg"
          />
          <span className="item_txt">
          </span>
        </li>
        <li
          className="list_item"
          data-advantages-item="02"
          onClick={accordionStateChange}
        >
          <img
            className="item_pic"
            src="/img/advantage-2.jpg"
          />
          <span className="item_txt">
          </span>
        </li>
        <li
          className="list_item"
          data-advantages-item="03"
          onClick={accordionStateChange}
        >
          <img
            className="item_pic"
            src="/img/advantage-3.jpg"
          />
          <span className="item_txt">
          </span>
        </li>
        <li
          className="list_item"
          data-advantages-item="04"
          onClick={accordionStateChange}
        >
          <img
            className="item_pic"
            src="/img/advantage-4.jpg"
          />
          <span className="item_txt">
          </span>
        </li>
        <li
          className="list_item"
          data-advantages-item="05"
          onClick={accordionStateChange}
        >
          <img
            className="item_pic"
            src="/img/advantage-1.jpg"
          />
          <span className="item_txt">
          </span>
        </li>
      </Slider>
    </ul>
  )
}

export default SliderAdvantages
