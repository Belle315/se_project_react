import "./ItemCard.css";

function ItemCard({ item, onSelectCard }) {
  return (
    <li className="item-card" onClick={() => onSelectCard(item)}>
      <img src={item.imageUrl} alt={item.name} className="item-card__image" />
      <p className="item-card__name">{item.name}</p>
    </li>
  );
}

export default ItemCard;
