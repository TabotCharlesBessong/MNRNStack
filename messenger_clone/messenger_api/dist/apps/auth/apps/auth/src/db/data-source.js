"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = exports.dataSourceOptions = void 0;
const user_entity_1 = require("../../../../libs/shared/src/entities/user.entity");
const typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    database: 'messenger-clone',
    entities: [user_entity_1.UserEntity],
    migrations: ['dist/apps/auth/db/migrations/*.js']
};
exports.dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
//# sourceMappingURL=data-source.js.map