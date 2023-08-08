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

    /**
     * monitoring events logs pool
     */
    this.pool.on("error", (err) => {
      console.error("Unexpected error on idle client", err);
    })
    this.pool.on("connect", () => {
      console.log("Postgres connected");
    })
    this.pool.on("acquire", (client) => {
      console.log("Postgres acquired a connection");
    })
    this.pool.on("remove", (client) => {
      console.log("Postgres removed a connection");
    })
    this.pool.on("release", (client) => {
      console.log("Postgres released a connection");
    })

  }

  async connect() {
    return await this.pool.connect();
  }

  async disconnect() {
    await this.pool.end();
  }
}

export default PgClient;
