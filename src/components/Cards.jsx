import "../styles/cards.css";

function shuffleList(list) {
  const newList = list.sort(() => Math.random() - 0.5);
  return newList;
}

function ListItem({ item, list, setList, currentCards, setCurrentCards }) {
  const handleButtonClick = () => {
    if (!currentCards.includes(item.id)) {
      const addID = [...currentCards, item.id];
      console.log(addID);
      setCurrentCards(addID);
    } else {
      setCurrentCards([]);
    }
    setList(shuffleList(list));
  };

  return (
    <button onClick={handleButtonClick}>
      <img src={item.image} alt="" className="cards-item" />
    </button>
  );
}

export function CardList({ list, setList, currentCards, setCurrentCards }) {
  return (
    <div className="cards-container">
      {list.map((item) => {
        return (
          <ListItem
            key={item.id}
            item={item}
            list={list}
            setList={setList}
            currentCards={currentCards}
            setCurrentCards={setCurrentCards}
          />
        );
      })}
    </div>
  );
}
