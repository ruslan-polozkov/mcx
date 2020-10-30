import ToUp from "../components/ToUp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from 'react'

const AllFiveDominoes = () => {
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
                <h2>Domino Five</h2>
              </div>
              <div className="content_img">
                <img src="/img/all-fives-dominoes.jpeg" alt="Dominoes" />
              </div>
              <div className="content_text">
                <h3>Domino Five</h3>
                <p>Domino 5 is one of the most exciting types of board games. Its rules are practically no different from the
                classic version, except for one “small” nuance. The player’s task is not just to throw off all his dices,
                attaching them to the overall game, but to put dices at the ends of the pyramid, which is 5 or multiples
                of five in total.</p>
                <p>You can play ‘Domino Five’ on our website. The game wins over thousands, if not millions of board game
                lovers because of its complicated rules. It is not enough just to place the dice on the playing board. It is
                important to calculate the sum of all points on the table, add the value of your dice to them. This
                number must be a multiple of five. Only in this case, you will receive additional points. Otherwise, the
                player does not receive any additional points.</p>
                  <p>Moreover, Domino Five is interesting because you can start the game with absolutely any dice. The very
                beginning is a little different. After mixing, each player is given one dice. He who has the lowest one will
                make the first move. However, all players immediately hand over the received dices, a new kneading
                takes place, they are dealt 5 stones each – and only then they can make their first move. It doesn’t have
                to be done with a double. But the first double that appears on the game board will be a “cross,” i.e. it
                will be possible to move from it in all four directions. The “cross” rule applies only to the first double, all
                the rest are played according to the classical rules.</p>
                    <p>The rules for ending a round of domino five do not differ from the classic rules. The round ends when
                one of the players is out of the game using all his dices. The second option to finish the round is to
                declare “draw” when the dices are held by the players, but no one will have the opportunity to continue
                the game.</p>
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

export default AllFiveDominoes
