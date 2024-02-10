import { db } from "../database/db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM agendamentos";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO agendamentos(`nome`, `servico`, `data` , `horario`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.servico,
    req.body.data,
    req.body.horario,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Agendamento criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE agendamentos SET `nome` = ?, `servico` = ?, `data` = ?, `horario` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.servico,
    req.body.data,
    req.body.horario,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Agendamento atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM agendamentos WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Agendamento deletado com sucesso.");
  });
};
