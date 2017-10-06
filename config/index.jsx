const env = process.env;

const config = {
  port: env.PORT || 8080,
  host: env.HOST || '127.0.0.1'
};

module.exports = config;
