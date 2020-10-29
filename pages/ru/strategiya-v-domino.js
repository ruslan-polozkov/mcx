import ToUp from "../../components/ToUp";
import FooterRu from "../../components/FooterRu";
import HeaderRu from "../../components/HeaderRu";
import React from 'react'


const StrategiyaVdomino = () => {
  const bgImage = {
    backgroundImage: "url('/img/main-bg.jpg')",
    backgroundSize: "cover",
    width:"100%",
    height:"100%"
  }
  return (
    <div className="second">
      <HeaderRu />
      <div className="wrapper">
        <article className="main" style={bgImage}>
          <div className="global-container">
            <div className="main_content">
              <div className="content_title">
                <h2>Стратегия игры в домино</h2>
              </div>
              <div className="content_img">
                <img src="/img/strategiya-v-domino.jpg" alt="Dominoes" />
              </div>
              <div className="content_text">
                <h3>Стратегия игры в домино</h3>
                <p>У каждого опытного игрока будет своя система, как выиграть в домино. И он будет свято верить в
                то, что это система одна из самых лучших. Однако, существует несколько правил или советов,
                следование которым делает вашу жизнь в игре значительно проще, а шансы на выигрыш
                  увеличиваются. Советы будут даны на примере классической разновидности настольной игры.</p>
                <ol>
                <li>1. Выбор партнёра. По классическим правилам игра ведётся «стенка на стенку», то есть в
                формате два на два. Это означает, что секретами домино должны обладать уже два
                человека: и вы, и ваш партнёр. Поэтому к выбору игрока в пару нужно подходить с
                ответственностью. Он должен уметь проявлять инициативу, чтобы периодически брать
                игру на себя, когда партия у вас в роли лидера не задаётся. При этом в спорных моментах
                вы должны находить общий язык за доли секунды, понимая, как лучше поступить для
                достижения командной цели – победы.</li>
                  <li>2. Подсчёт очков. Это важный элемент каждой партии. И тактика при игре в домино
                напрямую влияет на то, количество очков, которое команда наберёт в свой «актив».
                Важный момент, который нужно помнить – это ценность каждой костяшки. Когда у вас на
                руках остаётся несколько «камней», среди которых есть «пусто-пусто», этот камень
                вообще не добавляет вам очков. Но если он на руках останется единственным – это сразу
                добавляет десять очков.</li>
                    <li>3. Замес. Во многих учебниках «Как научиться играть в домино» описано, что самый важный
                элемент в игре – это первый ход, поскольку он задаёт темп и настроение всей партии. Но
                если вы играете вживую, значительно важнее провести толковый замес. Здесь важно не
                торопиться, а спокойно перемешивать костяшки равномерными движениями. Это сводит к
                минимуму шансы, что один из «камней» перевернётся, что приведёт к затягиванию
                промежутка между партиями и недовольству вашего партнёра и команды соперников.</li>
                      <li>4. Стартовый расклад. Важно внимательно осмотреть кости, которые вам достались. Пять
                дуплей или шесть одинаковых номеров – это перезамес. Но и это ещё не всё. Оценивая
                структуру сданных вам «камней», вы строите стратегию на дебют партии. И вы начинаете
                понимать, от каких номеров следует избавляться в первую очередь, а какие следует
                приберечь на середину или даже развязку игры.</li>
                </ol>
                  <p>Игра в интернете заметно отличается от игры вживую, поскольку в онлайн игре у вас нет
                возможности следить за мимикой, жестикуляциями и настроением своих соперников и партнёра.
                Однако, это хороший способ научиться играть в одну из самых увлекательных и интересных
                настольных игр современности. А чтобы узнать сакральные приёмы и секреты домино – за
                    столами нужно провести не один десяток часов, поскольку они приходят с опытом!</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <ToUp />
      <FooterRu />
    </div>
  )
}

export default StrategiyaVdomino
