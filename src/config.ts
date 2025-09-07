import path from 'path';
import dotenv from 'dotenv';
import env from 'env-var';

const nodeEnv = process.env['NODE_ENV'] ?? 'development';

const envFile = nodeEnv === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

export const config = {
    service: {
        port: env.get('PORT').default(8000).required().asPortNumber(),
    },
    mongo: {
        uri: env.get('MONGO_URI').required().asString(),
        templateCollectionName: env.get('TEMPLATE_SERVICE').required().asString(),
    },
    cors: {
        origin: env.get('CORS_ORIGIN').required().asString(),
    },
};
