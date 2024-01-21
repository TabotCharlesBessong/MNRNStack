import { StripeService } from './strpe.service';
import { Cart } from './Cart.model';
export declare class StripeController {
    private stripeService;
    constructor(stripeService: StripeService);
    checkout(body: {
        cart: Cart;
    }): any;
}
