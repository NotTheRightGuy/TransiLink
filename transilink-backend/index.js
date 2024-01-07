const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { passEncryptor, comparePassword } = require("./utils/passwordHelper");

require("dotenv").config();

const dbPassword = process.env.DBPASS;
const JWT_SECRET = process.env.JWT_SECRET;
const dbConnURL = `mongodb+srv://NotTheRightGuy:${dbPassword}@cluster0.gf1otxj.mongodb.net/?retryWrites=true&w=majority`;

const User = require("./Schema/User");
const School = require("./Schema/School");

app.use(express.json());
app.use(cors());
const PORT = 8001;

app.post("/auth/register", (req, res) => {
    const username = req.body.username;
    let password = req.body.password;

    // Check if user doesn't exist

    User.findOne({ username: username }).then((user) => {
        if (user) {
            return res
                .status(400)
                .json({ username: "Username already exists" });
        } else {
            password = passEncryptor(password);

            const newUser = new User({
                username,
                password,
            });

            newUser
                .save()
                .then((user) => {
                    const jwtToken = jwt.sign(
                        {
                            id: user._id,
                            username: user.username,
                        },
                        JWT_SECRET,
                        {
                            expiresIn: "1d",
                        }
                    );
                    res.status(200).json({ ...user._doc, JWT: jwtToken });
                })
                .catch((err) => {
                    res.status(500).json(err);
                });
        }
    });
});

app.post("/auth/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username: username }).then((user) => {
        if (!user) {
            return res.status(404).json({ username: "User not found" });
        } else {
            const isPasswordCorrect = comparePassword(password, user.password);

            if (isPasswordCorrect) {
                const jwtToken = jwt.sign(
                    {
                        id: user._id,
                        username: user.username,
                    },
                    JWT_SECRET,
                    {
                        expiresIn: "1d",
                    }
                );
                res.status(200).json({ ...user._doc, JWT: jwtToken });
            } else {
                return res.status(400).json({ password: "Wrong password" });
            }
        }
    });
});

app.get("/school/get", (req, res) => {
    let schoolName = req.query.schoolName;
    if (!schoolName)
        return res.status(400).json({ error: "School name not provided" });
    School.find({ school_name: { $regex: `^${schoolName}`, $options: "i" } })
        .then((schools) => {
            res.status(200).json(schools);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
    mongoose
        .connect(dbConnURL)
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.log(err));
});
