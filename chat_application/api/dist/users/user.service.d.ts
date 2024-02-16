import { IUserService } from './user';
import { User } from 'src/utils/typeorm';
import { CreateUserDetails } from "src/utils/types";
import { Repository } from 'typeorm';
export declare class UserService implements IUserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(userDetails: CreateUserDetails): Promise<User>;
}
