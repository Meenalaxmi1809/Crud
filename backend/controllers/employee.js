const Model = require('../models/employee');
const controller = {};

controller.create = async (req, res) => {
    const item = new Model({
        name: req.body.name,
        email: req.body.email,
        designation: req.body.designation,
        phoneNumber: req.body.designation,
        dob:req.body.dob,
        location:req.body.location,
        profile:req.body.profile
        
    });

    await item.save();

    res.json({
        status: 'Creation success'
    });
};

controller.find = async (req, res) => {
    const list = await Model.find();
    res.json(list);
};

controller.findById = async (req, res) => {
    const item = await Model.findById(req.params.id);
    res.json(item);
};


    controller.findByIdAndUpdate = async (req, res) => {
    await Model.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.json({
        status: 'Update success'
    });
};

controller.findByIdAndRemove = async (req, res) => {
    await Model.findByIdAndRemove(req.params.id, { $set: req.body });
    res.json({
        status: 'Delete success'
    });
};

module.exports = controller;