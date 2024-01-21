declare class User {
    id: string;
    name: string;
    phoneNo: string;
    address: string;
    email: string;
}
interface Location {
    latitude: string;
    longitude: string;
}
declare class Address {
    id: string;
    streetAddress: string;
    city: string;
    location: Location;
}
declare class Restaurant {
    id: string;
    name: string;
    logo: string;
    address: Address;
    description: string;
}
interface CouponCode {
}
interface PaymentStatus {
}
declare class Payment {
    id: string;
    orderId: string;
    couponCode: CouponCode;
    paymentStatus: PaymentStatus;
}
declare class Bill {
    id: string;
    totalCost: string;
    discount: string;
    tax: string;
    amountToBePaid: string;
}
interface OrderStatus {
}
declare class Order {
    id: string;
    userId: string;
    restaurantId: string;
    orderStatus: OrderStatus;
    menuItemList: MenuItem;
}
interface CuisineType {
}
interface MealType {
}
declare class MenuItem {
    id: string;
    cusineType: CuisineType;
    itemName: string;
    itemDescription: string;
    mealType: MealType;
    price: string;
    restaurantId: string;
}
declare class Delivery {
    id: string;
    deliveryBoyId: string;
    userId: string;
    orderId: string;
    deliveryTime: Date;
}
