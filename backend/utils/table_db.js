const { sql } = require("../config/pgDb");


const createTables = async () => {
  console.log("CREATING TABLE users...");
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
  await sql`DROP TABLE IF EXISTS users;`;
  await sql`
    CREATE TABLE users (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      email VARCHAR(50) UNIQUE NOT NULL,
      name VARCHAR(50) NOT NULL,
      password TEXT NOT NULL,
      avatar_img TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  console.log("CREATED TABLE users.");
};

const createCategory = async () => {
  console.log("CREATING TABLE Category...");
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
  await sql`DROP TABLE IF EXISTS category;`;
  await sql`
    CREATE TABLE category (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(50) NOT NULL,
      description TEXT,
      category_img TEXT,
      category_color TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  console.log("CREATED TABLE Category.");
};

const createTransaction = async () => {
  console.log("CREATING TABLE Transaction...");
  // await sql`CREATE EXTENSION "uuid-ossp";`;
  await sql`DROP TABLE IF EXISTS transaction;`;
  // await sql`CREATE TYPE transaction_type AS ENUM ('INC', 'EXP');`;
  await sql`
  CREATE TABLE transaction (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    name VARCHAR(50) NOT NULL,
    amount REAL NOT NULL,
    transaction_type transaction_type,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id UUID REFERENCES category(id)
  );
  `;

  console.log("CREATED TABLE Transaction.");
};

const insertData = () => {};

createTransaction();
createCategory();
createTables();
insertData();
