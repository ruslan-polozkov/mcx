import ToUp from "../components/ToUp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from 'react'

const DominoRules = () => {
  const bgImage = {
    backgroundImage: "url('/img/main-bg.jpg')",
    backgroundSize: "cover",
    width:"100%",
    height:"100%"
  }
  return (
    <div className="second second-page">
      <Header />
      <div className="wrapper">
        <article className="main" style={bgImage}>
          <div className="global-container">
            <div className="main_content">
              <div className="content_title">
                <h2>Classic Domino Rules

                </h2>
              </div>
              <div className="content_img">
                <img src="/img/dominoes-rules.jpg" alt="Dominoes" />
              </div>
              <div className="content_text">
                <h3>Classic Domino Rules</h3>
                <p>The rules of playing dominoes with a computer are no different from playing live. Depending on the
                number of players, you are dealt seven dice each if the game starts one-on-one, and five dice if the
                game involves three or four players. The remaining stones remain in the center of the table and are
                called the “pool.” It serves to replenish their supplies by players when they do not have enough bones
                  to continue the game.</p>
                  <p>The first move is given to the player with the smallest double, i.e. dices with the same numbers: “one-
                one,” “two-two,” etc. If no one has a double, the classic domino means a move with the most
                ‘expensive’ dice, where the sum of the numbers will be maximum. This is the “six-five” dice.
                The players take turns adding dice to the laid out dices from those dealt to them at the beginning of the
                game. Matching numbers is a must. If you don’t actually have any suitable bone, the participant goes to
                the “pool” and takes the bones from there until he finds a suitable one. Or until there is only one dice
                    left, which is an emergency supply that no one gets.</p>
                    <p>The goal of the classic domino game with a computer without registration is to be the first to throw all
                your dices, attaching them to the overall game. The more often you turn to the “pool” for help, the less
                      chances of winning you have.</p>
                      <p>The second option for ending the game is “draw.” When the opponents have dices, but none of them is
                suitable for continuing the game, and the “pool” is already empty. Then everyone starts scoring
                together. The player with the lowest score is considered the winner of the round and “pick it up.”
                Usually, the game of classic dominoes lasts several rounds. By prior arrangement, the game can be
                        played up to a set of 50, 100, 150, 200, etc. points. It depends on your free time.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <ToUp />
      <Footer />
    </div>
  )
}

export default DominoRules
