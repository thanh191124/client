import { User } from '../model/userModel'; // Ensure the correct path and filename

const API_URL = 'https://backenddt-main.onrender.com/api/api/user/';

export const UserService = {
    // Fetch all users
    getAllUsers: async (): Promise<User[]> => {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return response.json(); // Return the user data as JSON
    },

    // Create a new user
    createUser: async (newUser: User): Promise<User> => {
        const response = await fetch(API_URL, {
            method: 'POST', // Use POST method to create a new user
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser), // Send new user data as JSON
        });

        if (!response.ok) {
            throw new Error('Failed to create user');
        }

        return response.json(); // Return the created user from server response
    },

    // Update user by ID
    updateUserByID: async (id: string, updateUser: User): Promise<User> => {
        const response = await fetch(`${API_URL}update/${id}`, {
            method: 'PUT', // Corrected method to PUT for updating user
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser), // Send updated user data as JSON
        });

        if (!response.ok) {
            throw new Error('Failed to update user');
        }

        return response.json(); // Return the updated user from server response
    },

    // Bulk update users (renamed to reflect correct behavior)
    updateUsers: async (updateUser: User): Promise<User> => {
        const response = await fetch(`${API_URL}updates`, {
            method: 'PUT', // Corrected to PUT for bulk updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser), // Send updated user data as JSON
        });

        if (!response.ok) {
            throw new Error('Failed to update users');
        }

        return response.json(); // Return the updated user data from server response
    },

    // Get user by ID
    getUserByID: async (id: string): Promise<User> => {
        const response = await fetch(`${API_URL}${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json(); // Return the user data as JSON
    },

    // Update user status by ID
    updateStatus: async (id: string, updateStatusUser: string): Promise<User> => {
        const response = await fetch(`${API_URL}update-status/${id}`, {
            method: 'POST', // Corrected to POST for status update
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: updateStatusUser }), // Send status data as JSON
        });

        if (!response.ok) {
            throw new Error('Failed to update user status');
        }

        return response.json(); // Return the updated user status from server response
    }
};
