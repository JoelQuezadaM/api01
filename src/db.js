import { createPool } from "mysql2/promise";

export const pool = createPool({
    user:'root',
    database:'empresa01',
    password:'123456',
    port:'3306',
    host:'localhost'
})