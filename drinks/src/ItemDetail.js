import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SnackOrBoozeApi from './api';
import "./ItemDetail.css"

const ItemDetail = ({ itemType }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchItem() {
      try {
        const items = await (itemType === 'snacks'
          ? SnackOrBoozeApi.getSnacks()
          : SnackOrBoozeApi.getDrinks());
  
        console.log('Fetched items:', items);
  
        const selectedItem = items.find((item) => item.id === id);

        console.log('Selected item:', selectedItem);
  
        setItem(selectedItem);
        setIsLoading(false);
      } catch (error) {
        console.error(`Error fetching ${itemType}:`, error);
        setIsLoading(false);
      }
    }
  
    fetchItem();
  }, [itemType, id]);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="itemContainer">
      <h2>{item.name}</h2>
          <p id="description"> {item.description}</p>
          <p id="recipe">Ingredients: {item.recipe}</p>
    </div>
  );
};

export default ItemDetail;
