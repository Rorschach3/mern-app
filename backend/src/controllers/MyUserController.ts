import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body;
        //check if the user already exists
        const existingUser = await User.findOne({ auth0Id });
        // User already exists, send 204 No Content
        if (existingUser) {
            return res.status(204).send();
        }
        // Create a new user
        const newUser = new User(req.body);
        // Save the new user to the database
        await newUser.save();
        // Respond with the newly created user
        res.status(201).json(newUser.toObject());
    } catch (error) {
        // Log the error and return 500 Internal Server Error
        console.log(error);
        res.status(500).json({ message: "Error creating user" });
    }
};

export default {
createCurrentUser,
};
