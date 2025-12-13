export function Game() {
  const currentScore = 1;
  const bestScore = 2;
  //   const json = getCards();
  let cardImageURLs = [];

  // wrap in useEffect?
  async function getCards() {
    const url = "https://ghibliapi.vercel.app/films/";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      cardImageURLs = getImageURLs(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  // put images into array
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

  getCards();

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

function ListItem({ item }) {
  return (
    <li>
      <img src={item} alt="" srcset="" />
    </li>
  );
}

function CardList({ list }) {
  return (
    <ul>
      {list.map((item) => {
        return <ListItem key={item.id} item={item.image} />;
      })}
    </ul>
  );
}
