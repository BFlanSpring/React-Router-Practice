import React, { useState, useEffect } from 'react';
import SnackOrBoozeApi from './api';
import Menu from './Menu';
import MenuItem from './MenuItem';
import "./DrinkFood.css"

const DrinkPage = () => {
  const [drinkItems, setDrinkItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchDrinks() {
      try {
        const drinks = await SnackOrBoozeApi.getDrinks();
        setDrinkItems(drinks);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching drinks:', error);
        setIsLoading(false);
      }
    }

    fetchDrinks();
  }, []);


  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="MenuContainer">
      <Menu items={drinkItems.map((drink) => drink.name)} itemName="Drink" />
      {drinkItems.map((drink) => (
        <MenuItem
          itemType="drinks"
          key={drink.id}
          itemName={drink.name}
          itemQuantity={drink.quantity}
          itemId={drink.id}
        />
      ))}
    </div>
  );
};

export default DrinkPage;
