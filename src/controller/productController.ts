import { Product } from '../model/ProductModel'; // Ensure the path and file name are correct

const API_URL = 'http://localhost:3000/api/products/';

export class ProductController {
    // Fetch all products
    static async fetchProducts(): Promise<Product[]> {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    // Get product categories
    static async getProductCategory(): Promise<any[]> {
        try {
            const response = await fetch(`${API_URL}get-category`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching product category:', error);
            throw error;
        }
    }

    // Create a new product
    static async createProduct(newProduct: Product): Promise<Product> {
        try {
            const response = await fetch(`${API_URL}creates`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct), // Convert newProduct to JSON
            });

            if (!response.ok) {
                throw new Error('Failed to create product');
            }
            return await response.json();
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    }

    // Get product by ID
    static async getProductByID(id: string): Promise<Product> {
        try {
            const response = await fetch(`${API_URL}${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
    }

    // Update product by ID
    static async updateProductByID(id: string, updateProduct: Product): Promise<Product> {
        try {
            const response = await fetch(`${API_URL}update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateProduct), // Convert updateProduct to JSON
            });

            if (!response.ok) {
                throw new Error('Failed to update product');
            }
            return await response.json();
        } catch (error) {
            console.error('Error updating product:', error);
            throw error;
        }
    }

    // Delete product by ID
    static async deleteProductByID(id: string): Promise<void> {
        try {
            const response = await fetch(`${API_URL}delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId: id }),
            });

            if (!response.ok) {
                throw new Error('Failed to delete product');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            throw error;
        }
    }

    // Update product status
    static async updateProductStatus(id: string, newStatus: string): Promise<string> {
        try {
            const response = await fetch(`${API_URL}update-status`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: id,
                    newStatus: newStatus,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update product status');
            }
            return 'Product status updated successfully';
        } catch (error) {
            console.error('Error updating product status:', error);
            return 'Failed to update product status';
        }
    }

    // Get the latest product
    static async getProductNew(): Promise<Product> {
        try {
            const response = await fetch(`${API_URL}new`);
            if (!response.ok) {
                throw new Error('Failed to fetch new product');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching new product:', error);
            throw error;
        }
    }
}
