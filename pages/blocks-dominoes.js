import ToUp from "../components/ToUp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from 'react'

const BlocksDominoes = () => {
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
                <h2>Dominoes Blocks</h2>
              </div>
              <div className="content_img">
                <img src="/img/blocks-dominoes.jpg" alt="Dominoes" />
              </div>
              <div className="content_text">
                <h3>Dyenesh Blocks</h3>
                <p>The Dyenesh Blocks educational game is a great way to keep your child busy, captivating him or her with
                  really interesting and developing actions.</p>
                <p>In addition to variations of the game of dominoes, we offer kids to play with Dyenesh Blocks online on
                our website. This saves money, as one such set of 48 elements costs a certain amount of money. The
                  classic set includes:</p>
                <ul>
                 <li>Elements of four shapes (circle, square, triangle and rectangle).</li>
                 <li>Elements of three colors (red, yellow and blue).</li>
                 <li>Elements in two sizes (small and large).</li>
                 <li>Shapes differing in their thickness (thin and thick).</li>
                </ul>
                <p>Computer games with Dyenesh Blocks are interesting since there is not a single completely identical
                element in the kit. This allows for endless variations of how they can be folded in the virtual hands of
                  your children.</p>
                <p><strong>What skills does a child train by playing Dyenesh Blocks?</strong></p>
                <p>Accelerated development in pre-school children. This applies not only to thinking, building logical chains,
                but the development of mathematical skills, a penchant for studying computer science, understanding
                  the structure of the code of various programming languages, etc.</p>
                <p>The main skill that is trained in the “Blocks” game is the ability to assign and analyze various properties
                of objects. It is important not only to understand that a conventional circle is different from a square,
                  but to be able to describe it. Subsequently, this skill will be useful for programmers.</p>
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

export default BlocksDominoes
