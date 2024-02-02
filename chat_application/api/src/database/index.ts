class User {
  public id: string;
  public name: string;
  public phoneNo: string;
  public address: string; 
  public email: string;
}

interface Location {
  latitude: string;
  longitude: string;
}

class Address {
  public id: string;
  public streetAddress: string;
  public city: string;
  public location: Location;
}

class Restaurant {
  public id: string;
  public name: string;
  public logo: string;
  public address: Address;
  public description: string;
}

interface CouponCode {}
interface PaymentStatus {}

class Payment {
  public id: string;
  public orderId: string;
  public couponCode: CouponCode;
  public paymentStatus: PaymentStatus;
}

class Bill {
  public id: string;
  public totalCost: string;
  public discount: string;
  public tax: string;
  public amountToBePaid: string;
}

interface OrderStatus {}

class Order {
  public id: string;
  public userId: string;
  public restaurantId: string;
  public orderStatus: OrderStatus;
  public menuItemList: MenuItem;
}

interface CuisineType {}

interface MealType {}

class MenuItem {
  public id: string;
  public cusineType: CuisineType;
  public itemName: string;
  public itemDescription: string;
  public mealType: MealType;
  public price: string;
  public restaurantId: string;
}

class Delivery {
  public id: string;
  public deliveryBoyId: string;
  public userId: string;
  public orderId: string;
  public deliveryTime: Date;
}
