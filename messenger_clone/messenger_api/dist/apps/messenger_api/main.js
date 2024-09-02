/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/messenger_api/src/app.controller.ts":
/*!**************************************************!*\
  !*** ./apps/messenger_api/src/app.controller.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let AppController = class AppController {
    constructor(authService, presenceService) {
        this.authService = authService;
        this.presenceService = presenceService;
    }
    async getUsers() {
        return this.authService.send({
            cmd: 'get-users',
        }, {});
    }
    async postUser() {
        return this.authService.send({
            cmd: 'post-user',
        }, {});
    }
    async getPresence() {
        return this.presenceService.send({
            cmd: 'get-presence',
        }, {});
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('auth'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)('auth'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "postUser", null);
__decorate([
    (0, common_1.Get)('presence'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getPresence", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('AUTH_SERVICE')),
    __param(1, (0, common_1.Inject)('PRESENCE_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object])
], AppController);


/***/ }),

/***/ "./apps/messenger_api/src/app.module.ts":
/*!**********************************************!*\
  !*** ./apps/messenger_api/src/app.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/messenger_api/src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/messenger_api/src/app.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: './.env',
            }),
            microservices_1.ClientsModule.register([
                {
                    name: 'MESSENGER_CLONE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'messenger-clone',
                        noAck: false,
                        queueOptions: {
                            durable: true,
                        },
                    },
                },
            ]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: 'AUTH_SERVICE',
                useFactory: (configService) => {
                    const USER = configService.get('RABBITMQ_USER');
                    const PASSWORD = configService.get('RABBITMQ_PASS');
                    const HOST = configService.get('RABBITMQ_HOST');
                    const QUEUE = configService.get('RABBITMQ_AUTH_QUEUE');
                    return microservices_1.ClientProxyFactory.create({
                        transport: microservices_1.Transport.RMQ,
                        options: {
                            urls: ['amqp://localhost:5672'],
                            queue: QUEUE,
                            queueOptions: {
                                durable: true,
                            },
                        },
                    });
                },
                inject: [config_1.ConfigService],
            },
            {
                provide: 'PRESENCE_SERVICE',
                useFactory: (configService) => {
                    const USER = configService.get('RABBITMQ_USER');
                    const PASSWORD = configService.get('RABBITMQ_PASS');
                    const HOST = configService.get('RABBITMQ_HOST');
                    const QUEUE = configService.get('RABBITMQ_PRESENCE_QUEUE');
                    return microservices_1.ClientProxyFactory.create({
                        transport: microservices_1.Transport.RMQ,
                        options: {
                            urls: ['amqp://localhost:5672'],
                            queue: QUEUE,
                            queueOptions: {
                                durable: true,
                            },
                        },
                    });
                },
                inject: [config_1.ConfigService],
            },
        ],
    })
], AppModule);


/***/ }),

/***/ "./apps/messenger_api/src/app.service.ts":
/*!***********************************************!*\
  !*** ./apps/messenger_api/src/app.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!****************************************!*\
  !*** ./apps/messenger_api/src/main.ts ***!
  \****************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/messenger_api/src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(5000);
}
bootstrap();

})();

/******/ })()
;