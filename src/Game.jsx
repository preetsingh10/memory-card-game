import { useState } from "react"
import CardContainer from "./components/CardContainer"
function Game() {
  const [selectedCards, setSelectedCards] = useState([])

  return (
    <div>
      <h1>Memory Card Game</h1>
      <h2>Score: {selectedCards.length}</h2>

      <CardContainer selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
    </div>
  )
}
export default Game 
