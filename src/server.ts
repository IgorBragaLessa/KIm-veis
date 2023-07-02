import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

(async () => {
  await AppDataSource.initialize()
    .then(() => {
      app.listen(3000, () => {
        console.log("Servidor executando");
      });
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
})();
