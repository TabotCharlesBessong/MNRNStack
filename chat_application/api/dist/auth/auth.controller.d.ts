import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { IUserService } from 'src/users/user';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: IAuthService, userService: IUserService);
    registerUser(createUserDto: CreateUserDto): Promise<Record<string, any>>;
    login(): void;
    status(): void;
    logout(): void;
}
