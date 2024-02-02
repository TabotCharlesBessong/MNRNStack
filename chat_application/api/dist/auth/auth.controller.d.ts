import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CreateUser.dto';
export declare class AuthController {
    private authService;
    constructor(authService: IAuthService);
    registerUser(createUserDto: CreateUserDto): void;
    login(): void;
    status(): void;
    logout(): void;
}
