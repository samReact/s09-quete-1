const config = {
  use_env_variable: "DATABASE_URL",
  seederStorage: "sequelize",
  dialectOptions: {
    ssl: process.env.DATABASE_SSL === "true"
  }
};

module.exports = {
  development: config,
  production: config
};
