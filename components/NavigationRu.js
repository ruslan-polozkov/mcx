import React, { useState } from 'react'
import Link from 'next/link'
import LanguageMenuRu from "./LanguageMenuRu";

const NavigationRu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="header_menu">
      <nav className="menu_nav">
        <ul className="nav_list">
          <li className="list_item">
            <Link
              href="/ru/istoriya-domino" as={`/ru/istoriya-domino`}>
              <a>Об игре</a>
            </Link>
          </li>
          <li
            onMouseOver={() => setOpenMenu(true)}
            onMouseLeave={() => setOpenMenu(false)}
            className={openMenu ? "list_item types open" : "list_item types"}
          >
            <span className="item_title">
              Типы домино
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z" fill="evenodd"></path>
              </svg>
            </span>
            <div className="item_menu">
              <div className="menu_item">
                <Link
                  href="/ru/domino-online" as={`/ru/domino-online`}>
                  <a>Домино онлайн</a>
                </Link>
              </div>
              <div className="menu_item">
                <Link
                  href="/ru/domino-klassicheskoe" as={`/ru/domino-klassicheskoe`}>
                  <a>Классическое домино</a>
                </Link>
              </div>
              <div className="menu_item">
                <Link
                  href="/ru/domino-5" as={`/ru/domino-5`}>
                  <a>Пятёрки</a>
                </Link>
              </div>
              <div className="menu_item">
                <Link
                  href="/ru/domino-bloc" as={`/ru/blocks-dominoes`}>
                  <a>Домино блок</a>
                </Link>
              </div>
            </div>
          </li>
          <li className="list_item">
            <Link
              href="/ru/strategiya-v-domino" as={`/ru/strategiya-v-domino`}>
              <a>Стратегия игры</a>
            </Link>
          </li>
        </ul>
      </nav>
      <LanguageMenuRu />
    </div>
  )
}

export default NavigationRu
