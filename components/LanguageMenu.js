import React, { useState } from "react";
import { useRouter } from 'next/router'

const LanguageMenu = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)
  const handleLocaleChange = React.useCallback(
    (e) => {
      // const regex = new RegExp(`^/(${locales.join('|')})`)
      // router.push(router.pathname, router.asPath.replace(regex, `/${e.target.closest(".menu_item").dataset.value}`))
      router.push("/ru")
      if (router.pathname === "/ru/istoriya-domino") {
        router.push("/en/history-of-dominoes")
      }
      if (router.pathname === "/en/history-of-dominoes") {
        router.push("/ru/istoriya-domino")
      }
      if (router.pathname === "/ru/strategiya-v-domino") {
        router.push("/en/how-to-play-dominoes")
      }
      if (router.pathname === "/en/how-to-play-dominoes") {
        router.push("/ru/strategiya-v-domino")
      }
      if (router.pathname === "/en/dominoes-online") {
        router.push("/ru/domino-online")
      }
      if (router.pathname === "/ru/domino-online") {
        router.push("/en/dominoes-online")
      }
      if (router.pathname === "/en/dominoes-rules") {
        router.push("/ru/domino-klassicheskoe")
      }
      if (router.pathname === "/ru/domino-klassicheskoe") {
        router.push("/en/dominoes-rules")
      }

      if (router.pathname === "/en/all-fives-dominoes") {
        router.push("/ru/domino-5")
      }
      if (router.pathname === "/ru/domino-5") {
        router.push("/en/all-fives-dominoes")
      }
      if (router.pathname === "/en/blocks-dominoes") {
        router.push("/ru/domino-bloc")
      }
      if (router.pathname === "/ru]/domino-bloc") {
        router.push("/en/blocks-dominoes")
      }
    },
    [router]
  )


  return (
    // <div className ="language_menu">
    //   <select value={locale.lang} onChange={handleLocaleChange}>
    //     {locales.map(locale => (
    //       <option key={locale} value={locale}>
    //         {languageNames[locale]}
    //       </option>
    //     ))}
    //   </select>
    // </div>


    <div
      className={isOpen ? "language_menu open" : "language_menu"}
      // data-name={locale}
      onClick={toggleOpen}
    >
      <div className="menu_active">
        <div
          className="active_item active"
        >
          <img src="/img/us.png" alt="English" />
          <span>
            English
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z" fill="evenodd"></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="menu_list">
        <div
          className="menu_item"
          // data-value={localeCurrent === "en" ? "ru" : "en"}
          onClick={e => handleLocaleChange(e)}
        >
          <img src="/img/ru.png" alt="Русский" />
          <span>Русский</span>
        </div>
      </div>
    </div>
  )
}

export default LanguageMenu