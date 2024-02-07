const BASE_URL = 'http://localhost:3001';

const SnackOrBoozeApi = {
  async getSnacks() {
    const response = await fetch(`${BASE_URL}/snacks`);
    if (!response.ok) {
      throw new Error('Failed to fetch snacks');
    }

    const snacks = await response.json();
    return snacks;
  },

  async getDrinks() {
    const response = await fetch(`${BASE_URL}/drinks`);
    if (!response.ok) {
      throw new Error('Failed to fetch drinks');
    }

    const drinks = await response.json();
    return drinks;
  },

  async updateItemQuantity(itemType, itemId, change) {
    try {
      const url = `${BASE_URL}/${itemType}/${itemId}`;
      console.log('Sending POST request to:', url);

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch item for updating quantity');
      }

      const item = await response.json();

      item.quantity += change;
      
      const updateResponse = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (!updateResponse.ok) {
        throw new Error('Failed to update item quantity');
      }

      console.log('Item quantity updated successfully');
    } catch (error) {
      console.error('Error updating item quantity:', error);
      throw error;
    }
  },
};

export default SnackOrBoozeApi;


