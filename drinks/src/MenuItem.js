import React from 'react';
import { Link } from 'react-router-dom';
import SnackOrBoozeApi from './api'; // Import your API
import "./MenuItem.css"

const MenuItem = ({ itemName, itemType, itemId, itemQuantity }) => {
  const handlePurchase = async () => {
    try {
      console.log('Sending POST request to update item quantity');
      await SnackOrBoozeApi.updateItemQuantity(itemType, itemId, -1);
      // Update the UI or perform any necessary actions after successful purchase
      console.log(`${itemName} purchased successfully.`);
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.error('Error purchasing item:', error);
    }
  };

  const handleReturn = async () => {
    try {
      console.log('Sending POST request to update item quantity');
      await SnackOrBoozeApi.updateItemQuantity(itemType, itemId, 1);

      console.log(`${itemName} returned successfully.`);
      window.location.reload(); 
    } catch (error) {
      console.error('Error returning item:', error);
    }
  };

  return (
    <div className="MenuItemContainer">
      <div>
        <p id="name"> <Link to={`/${itemType}/${itemId}`}>{itemName}</Link> </p>
        <p>Quantity: {itemQuantity} </p>
      </div>
      <div className="buttons">
        <button onClick={handlePurchase}>Purchase</button>
        <button onClick={handleReturn}>Return</button>
      </div>
      
    </div>
  );
};

export default MenuItem;











