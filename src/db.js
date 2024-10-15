import { createPool } from "mysql2/promise";
import dotenv from 'dotenv'

dotenv.config();
export const pool = createPool({
    user:process.env.DB_USER,
    // user:'root',
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    host:process.env.DB_HOST
})