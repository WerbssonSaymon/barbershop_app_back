import { db } from "../database/db.js";

export const getServicos = (_, res) => {
    const q = "SELECT * FROM servicos";
  
    db.query(q, (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    });
};

export const addServico = (req, res) => {
    const q =
      "INSERT INTO servicos(`servico`, `valor`) VALUES(?)";
  
    const values = [
      req.body.servico,
      req.body.valor,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Registro adicionado com sucesso.");
    });
};

