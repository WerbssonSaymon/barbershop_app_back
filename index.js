import express from "express";
import agendamentoRoutes from "./routes/agendamentos.js";
import servicoRoutes from "./routes/servicos.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/agendamentos", agendamentoRoutes);
app.use("/servicos", servicoRoutes);

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
