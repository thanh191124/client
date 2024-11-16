import { Category } from '../model/categoryModel.tsx'; // Ensure correct path to your Category model

const apiUrl = process.env.REACT_APP_API_URL; // Access API URL from environment variable

export class CategoryController {
    
    // Fetch all categories
    static async getAllCategories(): Promise<Category[]> {
        try {
            const response = await fetch(`${apiUrl}api/getall-category`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }

            const data: Category[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    }

    // Create a new category
    static async createCategory(newCategory: any): Promise<Category> {
        try {
            const response = await fetch(`${apiUrl}api/create-category`, {
                method: 'POST',
                body: JSON.stringify(newCategory),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (!response.ok) {
                throw new Error('Failed to create category');
            }

            const data: Category = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating category:', error);
            throw error;
        }
    }

    // Fetch category by ID
    static async getCategoryByID(id: string): Promise<Category> {
        try {
            const response = await fetch(`${apiUrl}api/get-category/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (!response.ok) {
                throw new Error(`Failed to fetch category with ID ${id}`);
            }

            const data: Category = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching category by ID:', error);
            throw error;
        }
    }

    // Update category by ID
    static async updateCategoryByID(id: any, updateCategory: any): Promise<any> {
        try {
            const response = await fetch(`${apiUrl}api/update-category/${id}`, {
                method: 'POST',
                body: JSON.stringify(updateCategory),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (!response.ok) {
                throw new Error(`Failed to update category with ID ${id}`);
            }

            const data: Category = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating category:', error);
            throw error;
        }
    }

    // Delete category by ID
    static async deleteCategoryByID(id: string): Promise<void> {
        try {
            const response = await fetch(`${apiUrl}api/delete-category`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json', // Ensure the server knows the data type being sent
                },
                body: JSON.stringify({
                    categoryId: id // Correct the key for consistency
                }),
            });
            
            if (!response.ok) {
                throw new Error(`Failed to delete category with ID ${id}`);
            }

        } catch (error) {
            console.error('Error deleting category:', error);
            throw error;
        }
    }
}
