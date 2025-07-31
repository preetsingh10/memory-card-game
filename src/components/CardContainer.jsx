import { useEffect } from "react"
import Card from "./Card"
import { useState } from "react"
function CardContainer({ selectedCards, setSelectedCards }) {
  const [animeData, setAnimeData] = useState([])
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/characters")
      .then(res => res.json()
        .then(data => setAnimeData(data.data)))
  }, [])

  function randomCard(data) {
    let randomAnimeData = data[Math.floor(Math.random() * data.length)]
    return (<Card data={randomAnimeData} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />)
  }
  console.log(selectedCards)
  return (
    <div className="cardContainer">
      {animeData.length !== 0 && randomCard(animeData)}
      {animeData.length !== 0 && randomCard(animeData)}
      {animeData.length !== 0 && randomCard(animeData)}
      {animeData.length !== 0 && randomCard(animeData)}
    </div>
  )
}
export default CardContainer
