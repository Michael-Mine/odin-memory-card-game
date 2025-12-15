import "../styles/cards.css";

function ListItem({ item }) {
  return (
    <button>
      <img src={item} alt="" className="cards-item" />
    </button>
  );
}

export function CardList({ list }) {
  return (
    <div className="cards-container">
      {list.map((item) => {
        return <ListItem key={item.id} item={item.image} />;
      })}
    </div>
  );
}
