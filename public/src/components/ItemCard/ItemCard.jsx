import "./ItemCard.css";

function ItemCard({ item, onSelectCard }) {
  return (
    <li className="card" onClick={() => onSelectCard(item)}>
      <img src={item.imageUrl} alt={item.name} className="card__image" />
      <p className="card__name">{item.name}</p>
    </li>
  );
}

export default ItemCard;
