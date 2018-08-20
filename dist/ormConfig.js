"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PostgressConnectionStringParser = __importStar(require("pg-connection-string"));
var postgressConnectionOptions = PostgressConnectionStringParser.parse(process.env.DATABASE_URL || '');
var connectionOptions = {
    type: 'postgres',
    synchronize: true,
    logging: false,
    entities: ['entities/**/*.*'],
    host: postgressConnectionOptions.host || 'localhost',
    port: postgressConnectionOptions.port || 5432,
    username: postgressConnectionOptions.user || 'genie',
    password: postgressConnectionOptions.password || '',
    database: postgressConnectionOptions.database || 'oasis'
};
exports.default = connectionOptions;
//# sourceMappingURL=ormConfig.js.map