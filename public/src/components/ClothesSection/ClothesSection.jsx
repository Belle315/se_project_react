import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  clothingItems,
  onSelectCard,
  onAddClothesClick,
  onDeleteItem,
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p>Your Clothes</p>
        <button onClick={onAddClothesClick}>+ Add clothes</button>
      </div>

      <ul className="clothes-section__cards">
        {clothingItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onSelectCard={onSelectCard}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>

      {/*  PAGINATION */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active-page" : ""}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ClothesSection;
