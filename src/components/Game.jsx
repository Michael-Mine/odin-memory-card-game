import { useEffect, useState } from "react";
import { CardList } from "./Cards";

function getMyImageURLs(json) {
  const cardImageNumbers = [
    0, 1, 2, 3, 5, 7, 8, 10, 11, 12, 14, 15, 16, 17, 18, 19,
  ];
  const cardImageURLs = [];

  cardImageNumbers.forEach((element) => {
    cardImageURLs.push({
      id: json[element].title,
      image: json[element].image,
    });
  });

  return cardImageURLs;
}

const useCardImageURL = () => {
  const [cardImageURLs, setcardImageURLs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => setcardImageURLs(getMyImageURLs(response)))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { cardImageURLs, setcardImageURLs, error, loading };
};

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
