import React, { useState, useEffect } from 'react';
import SnackOrBoozeApi from './api';
import MenuItem from './MenuItem';
import Menu from './Menu';
import "./DrinkFood.css"

const SnackPage = () => {
  const [snackItems, setSnackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSnacks() {
      try {
        const snacks = await SnackOrBoozeApi.getSnacks();
        setSnackItems(snacks);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching snacks:', error);
        setIsLoading(false);
      }
    }

    fetchSnacks();
  }, []);


  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="MenuContainer">
      <Menu items={snackItems.map((snack) => snack.name)} itemName="Snack" />
      {snackItems.map((snack) => (
        <MenuItem
          itemType="snacks"
          key={snack.id}
          itemName={snack.name}
          itemQuantity={snack.quantity}
          itemId={snack.id}
        />
      ))}
    </div>
  );
};

export default SnackPage;
