import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import LanguageMenu from "./LanguageMenu";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleScrollTo = () => {
    const $gameList = document.getElementById('gameList');
    const $header = document.querySelector('.header');
    if (!$gameList || !$header || window.innerWidth < 1100 || document.querySelector(".second-page")) {
      return
    };
    const posTopGameList = $gameList.getBoundingClientRect().y;
    const posTopHeader = $header.getBoundingClientRect().y;
    const scrollPos = posTopGameList - posTopHeader - 120;
    window.scrollTo({top: scrollPos, behavior: "smooth"});
  }
  const hiddenMenu = () => {
    if (window.innerWidth > 1100 && document.querySelector(".main-page")) {
      return true;
    } else if (document.querySelector(".second-page")) {
      return false
    }
  }
  useEffect(() => {
    if (hiddenMenu()) {
      document.querySelector('.header_menu .item_title svg').classList.add("dnone")
    }
  }, [])
  const handleOpenMenu = () => {
    if (hiddenMenu()) {
      return;
    }
    setOpenMenu(true)
  }
  return (
    <div className="header_menu">
      <nav className="menu_nav">
        <ul className="nav_list">
          <li className="list_item">
            <Link
              href="/history-of-dominoes" as={`/history-of-dominoes`}>
              <a>About</a>
            </Link>
          </li>
          <li
            onMouseOver={() => {handleOpenMenu()}}
            onMouseLeave={() => setOpenMenu(false)}
            className={openMenu ? "list_item types open" : "list_item types"}
          >
            <span onClick={handleScrollTo} className="item_title">
              Domino types
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z" fill="evenodd"></path>
              </svg>
            </span>
            <div className="item_menu">
              <div className="menu_item">
                <Link
                  href="/dominoes-online" as={`/dominoes-online`}>
                  <a>Dominoes online</a>
                </Link>
              </div>
              <div className="menu_item">
                <Link
                  href="/dominoes-rules" as={`/dominoes-rules`}>
                  <a>Dominoes classic</a>
                </Link>
              </div>
              <div className="menu_item">
                <Link
                  href="/all-fives-dominoes" as={`/all-fives-dominoes`}>
                  <a>Dominoes five</a>
                </Link>
              </div>
              <div className="menu_item">
                <Link
                  href="/blocks-dominoes" as={`/blocks-dominoes`}>
                  <a>Dominoes bloc</a>
                </Link>
              </div>
            </div>
          </li>
          <li className="list_item">
            <Link
              href="/how-to-play-dominoes" as={`/how-to-play-dominoes`}>
              <a>Strategy game</a>
            </Link>
          </li>
        </ul>
      </nav>
      <LanguageMenu />
    </div>
  )
}

export default Navigation
