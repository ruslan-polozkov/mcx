import React, { useEffect } from "react"

const ToUp = () => {
  const goToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 240) {
        document.querySelector('.up-container').classList.add('active')
      } else {
        document.querySelector('.up-container').classList.remove('active')
      }
    })
  })

  return (
    <div
      className="up-container"
      onClick={goToUp}
    >
      <div className="up-img">
        <img src="/img/arrow.png" alt="arrow" />
      </div>
    </div>
  )
}

export default ToUp;