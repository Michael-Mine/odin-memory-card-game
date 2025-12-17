import { useState } from "react";
import { useCardImageURL } from "./Data";
import { CardList } from "./Cards";

function shuffleList(list) {
  const newList = list.sort(() => Math.random() - 0.5);
  return newList;
}

export function Game() {
  const { cardImageURLs, setcardImageURLs, error, loading } = useCardImageURL();
  const [currentCardsClicked, setCurrentCardsClicked] = useState([]);
  const [bestScore, setbestScore] = useState(0);

  let currentScore = 0;

  if (currentCardsClicked.length > 0) {
    currentScore = currentCardsClicked.length;
  }

  if (currentScore > bestScore) {
    setbestScore(currentScore);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  const handleButtonClick = (itemId) => {
    if (!currentCardsClicked.includes(itemId)) {
      const addID = [...currentCardsClicked, itemId];
      console.log(addID);
      setCurrentCardsClicked(addID);
    } else {
      setCurrentCardsClicked([]);
    }
    setcardImageURLs(shuffleList(cardImageURLs));
  };

  return (
    <div>
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
      <CardList list={cardImageURLs} handleClick={handleButtonClick} />
    </div>
  );
}
