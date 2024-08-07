import express from "express"
import {Router} from "express"
import mongoose from "mongoose"
import User from "../model/User"
import bcrypt from "bcrypt"

Router.get("/")

Router.post('/register', async (req, res) => {
    const {username, password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    try{
        const user = await User.create({
            username,
            hashedPassword
        })
        res.json(user)
    }catch(error){
        console.error("Error in creating the user", error)
    }
})

module.exports = Router;