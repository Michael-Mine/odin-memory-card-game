import { useState } from "react";
import { useCardImageURL } from "./Data";
import { CardList } from "./Cards";

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

  return (
    <div>
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
      <CardList
        list={cardImageURLs}
        setList={setcardImageURLs}
        currentCards={currentCardsClicked}
        setCurrentCards={setCurrentCardsClicked}
      />
    </div>
  );
}
