import express from "express";
import { addServico, getServicos } from "../controllers/servico.js";

const router = express.Router()

router.get("/", getServicos)

router.post("/", addServico)

export default router