"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const presence_module_1 = require("./presence.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(presence_module_1.PresenceModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map