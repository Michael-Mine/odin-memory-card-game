import "../styles/cards.css";

function ListItem({ item, currentCards, setCurrentCards }) {
  const handleButtonClick = () => {
    if (!currentCards.includes(item.id)) {
      const addID = [...currentCards, item.id];
      console.log(addID);
      setCurrentCards(addID);
    } else {
      setCurrentCards([]);
    }
  };

  return (
    <button onClick={handleButtonClick}>
      <img src={item.image} alt="" className="cards-item" />
    </button>
  );
}

export function CardList({ list, currentCards, setCurrentCards }) {
  return (
    <div className="cards-container">
      {list.map((item) => {
        return (
          <ListItem
            key={item.id}
            item={item}
            currentCards={currentCards}
            setCurrentCards={setCurrentCards}
          />
        );
      })}
    </div>
  );
}
