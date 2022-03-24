require('dotenv').config()

const dbConfig = {
	development: {
		use_env_variable: 'TEST_URL',
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				require: false,
				rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
			},
		},
	},
	test: {
		use_env_variable: 'TEST_URL',
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
			},
		},
	},
	production: {
		use_env_variable: 'DATABASE_URL',
		dialect: 'postgres',
		operatorsAliases: false,
	},
};

module.exports = dbConfig;