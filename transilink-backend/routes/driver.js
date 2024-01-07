const { Router } = require("express");
const School = require("../Schema/School");
const Driver = require("../Schema/Driver");

const router = Router();

router.post("/add", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const licenseNumber = req.body.license_number;
    const schoolID = req.body.school_id;
    const rating = 4;

    if (!name || !age || !licenseNumber || !schoolID)
        return res.status(400).json({ error: "Missing fields" });

    const newDriver = new Driver({
        name: name,
        age: age,
        licenseNumber: licenseNumber,
        schoolID: schoolID,
        avatar: `https://api.dicebear.com/7.x/micah/svg?seed=${licenseNumber}`,
        rating: rating,
    });

    newDriver
        .save()
        .then((driver) => {
            res.status(200).json(driver);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.get("/get", (req, res) => {
    let schoolID = req.query.schoolID;
    if (!schoolID)
        return res.status(400).json({ error: "School ID not provided" });
    Driver.find({ schoolID: schoolID })
        .then((drivers) => {
            res.status(200).json(drivers);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router;