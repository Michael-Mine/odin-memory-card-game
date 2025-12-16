import { useEffect, useState } from "react";

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

  const suffledList = cardImageURLs.sort(() => Math.random() - 0.5);

  return suffledList;
}

export const useCardImageURL = () => {
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
