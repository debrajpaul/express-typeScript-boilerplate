/**
 * @namespace
 * @module Routes
 * @description Route details for P2P API serive.
 * */
import * as dotenv from "dotenv";
import express from "express";
import {
    body_validator,
    params_validator,
    query_validator
} from "../middleware/validator";

dotenv.config();
const adminRouter = express.Router();

/**
 * @swagger
 *
 * /login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */

adminRouter.get("/", (req, res) => {
    res.end("P2P API admin service for admin module is working");
});

export default adminRouter;
