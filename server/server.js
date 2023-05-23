// Aller chercher les configurations de l'application
import "dotenv/config";

// Importer les fichiers et librairies
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import compression from "compression";
import bodyParser from "body-parser";
import cors from "cors";
import cspOption from "./csp-options.js";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";
import categoriesRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import orderRoutes from "./routes/order.js";
// Création du serveur
const app = express();

// Ajout de middlewares
app.use(helmet(cspOption));
app.use(compression());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use(express.static("public"));
app.use(bodyParser.json());
// Ajouter les routes ici ...
app.use("/api", userRoutes);
app.use("/api", categoriesRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", orderRoutes);
const PORT = process.env.PORT;
const URLDB = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.gf5zymt.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(URLDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`server running on Port ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });
// Renvoyer une erreur 404 pour les routes non définies
app.use(function (request, response) {
  // Renvoyer simplement une chaîne de caractère indiquant que la page n'existe pas
  response.status(404).send(request.originalUrl + " not found.");
});

//* Démarrage du serveur
//app.listen(process.env.PORT);
//console.info(`Serveurs démarré:`);
//console.info(`http://localhost:${ process.env.PORT }`);
