import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ clothingItems, onSelectCard, onAddClothesClick }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 3 per row × 2 rows

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = clothingItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(clothingItems.length / itemsPerPage);

  return (
    <div className="profile">
      <SideBar />

      <ClothesSection
        clothingItems={currentItems}
        onSelectCard={onSelectCard}
        onAddClothesClick={onAddClothesClick}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Profile;
