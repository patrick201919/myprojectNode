import { Sequelize } from "sequelize";

class Connection {
  db = null;
  async connect() {
    if (!!this.db) return;

    try {
      this.db = new Sequelize("Electro_Drive", "root", "root", {
        host: "localhost",
        port: 8889,
        dialect: "mariadb",
        logging: false,
      });
      await this.db.authenticate();
      console.log(`authentification réussite`);
    } catch (error) {
      console.error(error.message);
    }
  }
  async sync() {
    await this.db.sync();
    console.log(`synchronisation réussie`);
  }
}

const connection = new Connection();
await connection.connect();

export default connection;
