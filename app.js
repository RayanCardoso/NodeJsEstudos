const express = require("express");
const checkListRouter = require("./src/routes/checklist");
require("./config/database");

const app = express();
app.use(express.json());

app.use("/checklists", checkListRouter);

app.get('/', (req, res) => {
    res.send("<h1>Minha lista de tarefas hehe</h1>");
})

app.listen(3000, () => {
    console.log("Iniciado!");
}); // Ouvir a porta 3000