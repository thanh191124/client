export interface Voucher {
    VoucherID: string;
    Code: string;
    DiscountAmount: number;
    ExpiryDate: string;
    MinimumPurchaseAmount: number;
    quantityused: number;
    usablequantity: number; // Change this to usablequantity
    status: string;
    percent?: number;
}
