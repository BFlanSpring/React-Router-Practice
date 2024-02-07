import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SnackOrBoozeApi from './api';

const CountDisplay = () => {
  const [snackCount, setSnackCount] = useState(0);
  const [drinkCount, setDrinkCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCounts() {
      try {
        const snacks = await SnackOrBoozeApi.getSnacks();
        const drinks = await SnackOrBoozeApi.getDrinks();
        
        setSnackCount(snacks.length);
        setDrinkCount(drinks.length);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching counts:', error);
        setIsLoading(false);
      }
    }

    fetchCounts();
  }, []);

  if (isLoading) {
    return <p>Loading counts...</p>;
  }

  return (
    <div>
      <p>
        Total Snacks in stock:{' '}
        <Link to="/snacks">{snackCount}</Link>
      </p>
      <p>
        Total Drinks in stock:{' '}
        <Link to="/drinks">{drinkCount}</Link>
      </p>
    </div>
  );
};

export default CountDisplay;
