import knex from "knex";
import configdb from "./knexfile";

const db = knex(configdb.development);

export default db;

