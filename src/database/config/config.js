
const dbConfig = {
  development: {
    username: "postgres",
    password: "3050manu",
    database: "dropstar_db",
    host: "127.0.0.1",
    dialect: "postgres",

  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    operatorsAliases: false
  }
}

module.exports = dbConfig;