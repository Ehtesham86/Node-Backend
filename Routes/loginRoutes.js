// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../Controller/loginController');
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: API endpoints for managing User Login
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Authenticate user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Username for authentication
 *               password:
 *                 type: string
 *                 description: Password for authentication
 *     responses:
 *       '200':
 *         description: Login successful
 *       '401':
 *         description: Unauthorized
 */

// Login route
router.post('/login', authController.login);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: Username for authentication
 *         password:
 *           type: string
 *           description: Password for authentication
 *       required:
 *         - username
 *         - password
 */