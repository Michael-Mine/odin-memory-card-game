import "../styles/cards.css";

function ListItem({ item, handleClick }) {
  return (
    <button onClick={() => handleClick(item.id)}>
      <img src={item.image} alt="" className="cards-item" />
    </button>
  );
}

export function CardList({ list, handleClick }) {
  return (
    <div className="cards-container">
      {list.map((item) => {
        return <ListItem key={item.id} item={item} handleClick={handleClick} />;
      })}
    </div>
  );
}
