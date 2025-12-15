import { useEffect, useState } from "react";
import { CardList } from "./Cards";

function getImageURLs(json) {
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

  console.log(cardImageURLs);
  return cardImageURLs;
}

export function Game() {
  const currentScore = 1;
  const bestScore = 2;

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
      .then((response) => setcardImageURLs(getImageURLs(response)))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(cardImageURLs);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  // function to display cards in random on click

  // logic to remember which card for currentScore

  return (
    <div>
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
      <CardList list={cardImageURLs} />
    </div>
  );
}

async function getCards() {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films/");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    // console.log(json);
    return getImageURLs(json);
  } catch (error) {
    console.error(error.message);
  }
}
