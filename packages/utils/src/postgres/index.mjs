import pg from "pg";
const { Pool } = pg;

class PgClient {
  constructor(
    host = "localhost",
    port = 5432,
    user = "postgres",
    password = "postgres",
    database = "smart_tracking"
  ) {
    this.pool = new Pool({
      host,
      port,
      user,
      password,
      database,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });
  }

  async connect() {
    return await this.pool.connect();
  }

  async disconnect() {
    await this.pool.end();
  }
}

export default PgClient;
