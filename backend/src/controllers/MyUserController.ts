import { Request, Response } from "express";
import User from "../models/user";

const getCurrentUser = async (req: Request, res: Response) => {

    try {
        const currentUser = await User.findOne({ _id: req.userId });
        if (!currentUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(currentUser);
    } catch (error) {

        console.error(error);
        return res.status(500).json({ message: "Error getting user" });
    }
};

const createCurrentUser = async (req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body;


        // Check if the user already exists
        const existingUser = await User.findOne({ auth0Id });

        // User already exists, send 204 No Content
        if (existingUser) {

            return res.sendStatus(204);
        }

        // Create a new user
        const newUser = new User(req.body);

        // Save the new user to the database
        const savedUser = await newUser.save();
        console.log('Saved user:', savedUser);

        // Respond with the newly created user
        res.status(201).json(newUser.toObject());
    } catch (error) {

        // Log the error and return 500 Internal Server Error

        console.error(error);
        res.status(500).json({ message: "Error creating user" });
    }
};


const updateCurrentUser = async (req: Request, res: Response) => {
    try {
        const { name, addressLine1, country, city } = req.body;
        const user = await User.findById(req.userId);


        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.name = name;
        user.addressLine1 = addressLine1;
        user.city = city;
        user.country = country;
        
        await user.save();


        res.json(user);
    } catch (error) {

        console.error(error);
        res.status(500).json({ message: "Error updating user" });
    }
};


export default {




    getCurrentUser,
    createCurrentUser,
    updateCurrentUser,
};
