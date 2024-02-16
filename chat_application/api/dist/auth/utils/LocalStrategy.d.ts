import { Strategy } from "passport-jwt";
import { IAuthService } from "../auth";
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: IAuthService);
    validate(email: string, password: string): Promise<any>;
}
export {};
