import mongoose from "mongoose";

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongo") {
    switch (type) {
      case "mongo":
        mongoose
          .connect("mongodb://localhost:27017/test", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
          .then(() => {
            console.log("Connected to MongoDB");
          })
          .catch((error) => {
            console.log("Error connecting to MongoDB");
            console.error(error);
          });
        break;
      default:
        break;
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
export default instanceMongodb;
