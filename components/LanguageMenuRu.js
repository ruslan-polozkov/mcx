import React, { useState } from "react";
import { useRouter } from 'next/router'

const LanguageMenu = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)
  const handleLocaleChange = React.useCallback(
    (e) => {
      switch (router.pathname) {
        case "/ru/istoriya-domino":
          router.push("/history-of-dominoes")
          return;
        case "/ru/strategiya-v-domino":
          router.push("/how-to-play-dominoes")
          return;
        case "/ru/domino-klassicheskoe":
          router.push("/dominoes-rules")
          return;
        case "/ru/domino-online":
          router.push("/dominoes-online")
          return;
        case "/ru/domino-5":
          router.push("/all-fives-dominoes")
          return;
        case "/ru/domino-bloc":
          router.push("/blocks-dominoes")
          return;
        default:
          router.push("/")
          break;
      }
    },
    [router]
  )

  return (
    <div
      className={isOpen ? "language_menu open" : "language_menu"}
      onClick={toggleOpen}
    >
      <div className="menu_active">
        <div
          className="active_item active"
        >
          <img src="/img/ru.png" alt="Русский" />
          <span>
            Русский
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z" fill="evenodd"></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="menu_list">
        <div
          className="menu_item"
          onClick={e => handleLocaleChange(e)}
        >
          <img src="/img/us.png" alt="English" />
          <span>English</span>
        </div>
      </div>
    </div>
  )
}

export default LanguageMenu