const express = require("express");

const router = express.Router();

const Checklist = require("../models/checklist");

router.get("/", async (req, res) => {
    try {
        let checklist = await Checklist.find({})
        res.status(200).json(checklist);
    } catch (err){
        res.status(422).json(err);
    }
})

router.post("/", async (req, res) => {
    let { name } = req.body;

    try {
        let checklist = await Checklist.create({ name }) // Estou criando uma checklist com o parametro name
        res.status(200).json(req.body);
    } catch (err){
        res.status(422).json(err);
    }
})

router.get("/:id", async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).json(checklist);
    } catch (err){
        res.status(422).json(err);
    }
})

router.put("/:id", async (req, res) => {
    let { name } = req.body;
    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, { name : name }, {new: true}); // new true define que irá mostrar o novo parametro  que chegou
        res.status(200).json(checklist);
    } catch (error) {
        res.status(404).json(error);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        let checklist = await Checklist.findByIdAndRemove(req.params.id);
        res.status(200).json(checklist);
    } catch (error) {
        res.status(404).json(error);
    }
})

module.exports = router;
