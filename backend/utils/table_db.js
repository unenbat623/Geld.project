const { sql } = require("../config/pgDb");

const createTables = async () => {
  console.log("CREATEING TABLE...");
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
  await sql`DROP TABLE IF EXISTS users`;
  await sql`CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    password TEXT NOT NULL,
    avatar_img TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;
  console.log("CREATED TABLE.");
};

const createCategory = async () => {
  console.log("CREATEING TABLE...");
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
  await sql`DROP TABLE IF EXISTS Category`;
  await sql`CREATE TABLE Category (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL,
    description TEXT,
    category_img TEXT,
    category_color TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;
  console.log("CREATED TABLE.");
};

const insertData = () => {};

createCategory();
createTables();
insertData();
