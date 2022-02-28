const dotenv = require('dotenv');
const { version, name } = require('./package.json');
const NODE_ENV = process.env.ENV || process.env.NODE_ENV || 'development';

// env
const defaultEnv = './config/env/.env.default';
const envPath = `./config/env/.env.${NODE_ENV}`;

// call dotenv and it will return an Object with a parsed key
const defaultEnvFile = dotenv.config({ path: defaultEnv }).parsed;
const envPathFile = dotenv.config({ path: envPath }).parsed;

// call dotenv and it will return an Object with a parsed key
const env = {
  ...defaultEnvFile,
  ...envPathFile,
  VERSION: version,
  RELEASE: `${name}@${version}`,
};
// create a nice object from the env variable
const envKeys = Object.keys(env).reduce((prev, next) => {
  let value = process.env[next] || env[next];
  if (['true', 'false'].includes(env[next])) {
    value = env[next].toLowerCase() === 'true';
  }
  prev[next] = value;
  return prev;
}, {});
const isProd = NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: envKeys,
  images: {
    loader: "custom",
  },
  assetPrefix: isProd ? '/site-dashboard/' : ''
}

module.exports = nextConfig
