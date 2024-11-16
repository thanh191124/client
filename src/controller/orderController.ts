// Đảm bảo rằng bạn đã import các module cần thiết và sử dụng đúng môi trường
import { Order } from '../model/orderModel'; // Đảm bảo rằng bạn có model này

const apiUrl = process.env.REACT_APP_API_URL; // Đọc từ biến môi trường

export class OrderService {
    // Lấy tất cả đơn hàng
    static async getAllOrders(): Promise<Order[]> {
        try {
            const response = await fetch(`${apiUrl}/api/order`, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Error fetching all orders');
            }
            return await response.json(); // Chuyển dữ liệu từ JSON về dạng object
        } catch (error) {
            console.error('Error fetching all orders:', error);
            throw new Error('Error fetching all orders');
        }
    }

    // Lấy đơn hàng theo ID
    static async getOrderByID(orderId: number): Promise<Order | null> {
        try {
            const response = await fetch(`${apiUrl}/api/order/${orderId}`, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error(`Error fetching order with ID ${orderId}`);
            }
            return await response.json(); // Chuyển dữ liệu từ JSON về dạng object
        } catch (error) {
            console.error(`Error fetching order with ID ${orderId}:`, error);
            throw new Error('Error fetching order by ID');
        }
    }

    // Tìm kiếm đơn hàng
    static async searchorder(formData: string): Promise<any> {
        try {
            const response = await fetch(`${apiUrl}/api/order/search`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            return result; // Trả về kết quả tìm kiếm
        } catch (error) {
            console.error('Error searching orders:', error);
            throw error; // Ném lại lỗi để xử lý bên ngoài
        }
    }

    // Lấy đơn hàng theo ID người dùng
    static async getOrdersByUserId(userid: string): Promise<any> {
        try {
            const response = await fetch(`${apiUrl}/api/order/byuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userid),
            });

            if (!response.ok) {
                throw new Error('Error getting order: ' + response.statusText);
            }

            const data = await response.json(); // Chuyển dữ liệu từ JSON về dạng object
            return data;
        } catch (error) {
            console.error('Error getting order:', error);
            throw new Error('Error getting order');
        }
    }

    // Tạo đơn hàng mới
    static async createOrder(newOrder: Order): Promise<Order> {
        try {
            const response = await fetch(`${apiUrl}/api/order/creater`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newOrder),
            });

            if (!response.ok) {
                throw new Error('Error creating order');
            }
            return await response.json(); // Chuyển dữ liệu từ JSON về dạng object
        } catch (error) {
            console.error('Error creating order:', error);
            throw new Error('Error creating order');
        }
    }

    // Hiển thị chi tiết đơn hàng
    static async showorderdetail(id: string): Promise<any> {
        try {
            const response = await fetch(`${apiUrl}/api/orderdetail/get?id=${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error fetching order details: ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    // Cập nhật trạng thái đơn hàng
    static async updateStatus(datapost: any): Promise<any> {
        try {
            const response = await fetch(`${apiUrl}/api/order/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datapost),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error updating order status:", error);
            throw error;
        }
    }

    // Lấy chi tiết đơn hàng đầy đủ
    static async getFullOrdersByOrderId(orderId: number): Promise<any> {
        try {
            const response = await fetch(`${apiUrl}/api/orderdetail/get?id=${orderId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching full order:", error);
            throw error;
        }
    }
}
