import { Cart } from './Cart.model';
export declare class StripeService {
    private stripe;
    constructor();
    checkout(cart: Cart): any;
}
