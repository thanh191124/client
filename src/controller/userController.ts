import { User } from '../model/userModel'; // Ensure the correct path and filename
import { UserService } from '../services/UserService.ts'; // Correct the service path if necessary

export class UserController {
    // Method to fetch all users
    static async fetchUsers(): Promise<User[]> {
        try {
            return await UserService.getAllUsers(); // Call service to get all users
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error; // Rethrow error to be handled by the caller
        }
    }

    // Method to create a new user
    static async createUser(newUser: any): Promise<any> {
        try {
            return await UserService.createUser(newUser); // Call service to create a new user
        } catch (error) {
            console.error('Error creating user:', error);
            throw error; // Rethrow error for handling by caller
        }
    }

    // Method to get a user by ID
    static async getUserByID(id: string): Promise<User> {
        try {
            return await UserService.getUserByID(id); // Call service to get user by ID
        } catch (error) {
            console.error('Error fetching user:', error); // Log appropriate error message
            throw error; // Rethrow error for handling by caller
        }
    }

    // Method to update a user by ID
    static async updateUserByID(id: string, updateUser: User): Promise<User> {
        try {
            return await UserService.updateUserByID(id, updateUser); // Call service to update user by ID
        } catch (error) {
            console.error('Error updating user:', error); // Log appropriate error message
            throw error; // Rethrow error for handling by caller
        }
    }

    // Method to update the user status by ID
    static async updateStatusByID(id: string, updateStatusUser: any): Promise<User> {
        try {
            return await UserService.updateStatus(id, updateStatusUser); // Call service to update user status
        } catch (error) {
            console.error('Error updating user status:', error); // Log appropriate error message
            throw error; // Rethrow error for handling by caller
        }
    }
}
