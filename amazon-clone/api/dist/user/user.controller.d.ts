import { UserService } from "./user.services";
import { UserDetails } from "./user-details.interface";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUser(id: string): Promise<UserDetails | null>;
}
