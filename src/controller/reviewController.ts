// import { Review } from '../model/reviewModel'; // Ensure to import the correct Review model

const API_URL = 'https://backenddt-main.onrender.com/api/api/review/';

export const ReviewService = {
    // Get all reviews
    getAllReviews: async (): Promise<any[]> => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch reviews'); // Throw an error if the fetch fails
            }
            return await response.json(); // Return JSON data
        } catch (error) {
            console.error('Error fetching reviews:', error);
            throw error;
        }
    },

    // Add a new review
    addReview: async (newReview: any): Promise<any> => {
        try {
            const response = await fetch(`${API_URL}add`, {
                method: 'POST', // POST method to create a new review
                headers: {
                    'Content-Type': 'application/json', // Data format is JSON
                },
                body: JSON.stringify(newReview), // Convert the new review to JSON format
            });

            if (!response.ok) {
                throw new Error('Failed to add review'); // Throw error if the request fails
            }

            return await response.json(); // Return the created review from the server's response
        } catch (error) {
            console.error('Error adding review:', error);
            throw error;
        }
    },

    // Delete a review by ID
    deleteReview: async (id: string): Promise<void> => {
        try {
            const response = await fetch(`${API_URL}${id}`, {
                method: 'DELETE', // DELETE method to remove the review
            });

            if (!response.ok) {
                throw new Error('Failed to delete review'); // Throw error if deletion fails
            }

            // No return data needed, just confirming deletion
        } catch (error) {
            console.error('Error deleting review:', error);
            throw error;
        }
    },

    // Get reviews for a product by product ID
    getReviewByProduct: async (productID: string): Promise<any[]> => {
        try {
            const response = await fetch(`${API_URL}byproduct`, {
                method: 'POST', // POST method to retrieve reviews by product
                headers: {
                    'Content-Type': 'application/json', // Ensure the format is JSON
                },
                body: JSON.stringify({ ProductID: productID }), // Send product ID in the body
            });

            if (!response.ok) {
                throw new Error(`Error fetching reviews for product ${productID}`);
            }

            return await response.json(); // Return reviews for the product
        } catch (error) {
            console.error('Error fetching reviews for product:', error);
            throw error;
        }
    },

    // Get a review by ID
    getReviewByID: async (id: string): Promise<any> => {
        try {
            const response = await fetch(`${API_URL}${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch review'); // Error message if fetching review fails
            }
            return await response.json(); // Return review data in JSON format
        } catch (error) {
            console.error('Error fetching review:', error);
            throw error;
        }
    },
};
