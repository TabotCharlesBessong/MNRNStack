"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const auth_module_1 = require("./auth.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(auth_module_1.AuthModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map