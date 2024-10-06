import dotenv from "dotenv";
dotenv.config();

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 3000,
    host: process.env.DEV_APP_HOST || "localhost",
  },
  db: {
    url: process.env.MONGO_DB_URL,
    appName: process.env.MONGO_DB_APP_NAME,
  },
};

const prod = {
  app: {
    port: process.env.PROD_APP_PORT || 3000,
    host: process.env.PROD_APP_HOST || "localhost",
  },
  db: {
    url: process.env.MONGO_DB_URL,
    appName: process.env.MONGO_DB_APP_NAME,
  },
};

const configs = {
  dev,
  prod,
};

const env = process.env.NODE_ENV || "dev";
export default configs[env];
