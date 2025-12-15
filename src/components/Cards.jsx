function ListItem({ item }) {
  return (
    <li>
      <img src={item} alt="" srcset="" />
    </li>
  );
}

export function CardList({ list }) {
  return (
    <ul>
      {list.map((item) => {
        return <ListItem key={item.id} item={item.image} />;
      })}
    </ul>
  );
}
