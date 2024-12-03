const {request, response} = require('express');
const bcrypt = require('bcrypt');
const pool = require('../db/connection');
const userQueries = require('../models/users');

const SALT_ROUNDS = 10;

const getAllUsers = async (req = request, res = response) => {
    let conn;

    try {
        conn = await pool.getConnection();
        const users = await conn.query(userQueries.getAll);

        res.json(users);
        return;
    } catch (err) {
        res.status(500).json(err);
        return;
    }finally {
        if (conn) conn.end();
    }
}

const createUser = async (req = request, res = response) => {
    const {
        first_name,
        last_name,
        email,
        password
    } = req.body;

    if(!first_name || !last_name || !email || !password){
        res.status(400).json({message: 'Missing required fields'});
        return;
    }

    let conn;
    try{
        conn = await pool.getConnection();
        const [user_exists] = await conn.query(userQueries.getByEmail, [email]);
        if(user_exists){

            res.status(409).json({message: 'User already exists'});
            return;
        }

    

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = await conn.query(userQueries.addUser, [first_name, last_name, email, hashedPassword]);

    if(newUser.affectedRows === 0) {
        res.status(500.).send({message: 'Error adding user'});
        return;
    }

    res.status(201).send({message: 'User created'});
    }catch (err){
     res.status(500).json(err);
     return;
    }finally{
        if (conn) conn.end();
    }
}

const getUser= async(req =request, res=response) =>{
    const {id}= req.params;

    if(isNaN(id)){
        res.status(400)
        return;
    }

    let conn;
    try{
        conn= await pool.getConnection();
        const [user] = await conn.query(userQueries.getById, [id]);

        if(!user){
            res.status(404).send({message: 'user not found'});
            return;
        }
        
     res.json(user);
    }catch(err){
        res.status(500).json(err);
        return;
    }finally{
        if(conn) conn.end();
    }
}



module.exports = {
    getAllUsers,
    createUser,
    getUser,
};