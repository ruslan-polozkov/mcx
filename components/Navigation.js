import React, { useState } from 'react'
import Link from 'next/link'
import LanguageMenu from "./LanguageMenu";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="header_menu">
      <nav className="menu_nav">
        <ul className="nav_list">
          <li className="list_item">
            <Link
              href="/en/history-of-dominoes" as={`/en/history-of-dominoes`}>
              <a>About</a>
            </Link>
          </li>
          <li
            onMouseOver={() => setOpenMenu(true)}
            onMouseLeave={() => setOpenMenu(false)}
            className={openMenu ? "list_item types open" : "list_item types"}
          >
            <span className="item_title">
              Domino types
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z" fill="evenodd"></path>
              </svg>
            </span>
            <div className="item_menu">
              <div className="menu_item">
                <Link
                  href="/en/dominoes-online" as={`/en/dominoes-online`}>
                  <a>Dominoes online</a>
                </Link>
              </div>
              <div className="menu_item">
                <Link
                  href="/en/dominoes-rules" as={`/en/dominoes-rules`}>
                  <a>Dominoes classic</a>
                </Link>
              </div>
              <div className="menu_item">
                <Link
                  href="/en/all-fives-dominoes" as={`/en/all-fives-dominoes`}>
                  <a>Dominoes five</a>
                </Link>
              </div>
              <div className="menu_item">
                <Link
                  href="/en/blocks-dominoes" as={`/en/blocks-dominoes`}>
                  <a>Dominoes bloc</a>
                </Link>
              </div>
            </div>
          </li>
          <li className="list_item">
            <Link
              href="/en/how-to-play-dominoes" as={`/en/how-to-play-dominoes`}>
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
