function Card({ data, selectedCards, setSelectedCards }) {
  const imageSrc = data.images.webp.image_url
  const name = data.name
  function handleClick() {
    selectedCards.includes(data.mal_id) ? setSelectedCards([]) : setSelectedCards([...selectedCards, data.mal_id])
  }
  return (
    <div className="card">
      <div className="animeImageContainer" style={{ backgroundImage: `url(${imageSrc})` }} onClick={handleClick}>

      </div>
      <p>{name}</p>
    </div>
  )
}
export default Card
