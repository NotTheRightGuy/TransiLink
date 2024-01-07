const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    licenseNumber: {
        type: String,
        required: true,
        unique: true,
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
    },
    rating: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
