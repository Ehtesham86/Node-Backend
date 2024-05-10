const express = require('express');
const router = express.Router();
const subcategoryController = require('../Controller/subcategoryController');
/**
 * @swagger
 * tags:
 *   name: Subcategories
 *   description: API endpoints for managing subcategories
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Subcategory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the subcategory
 *         category_id:
 *           type: integer
 *           description: Identifier linking subcategory to its parent category
 */
/**
 * @swagger
 * /api/v1/subcategories/subcategories:
 *   get:
 *     summary: Get all subcategories
 *     tags: [Subcategories]
 *     responses:
 *       '200':
 *         description: A list of subcategories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subcategory'
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/subcategories/subcategories:
 *   post:
 *     summary: Create a new subcategory
 *     tags: [Subcategories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the subcategory
 *               category_id:
 *                 type: integer
 *                 description: Identifier linking subcategory to its parent category
 *     responses:
 *       '201':
 *         description: New subcategory created successfully
 *       '400':
 *         description: Bad request. Invalid input data
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/subcategories/subcategories/{id}:
 *   put:
 *     summary: Update a subcategory by ID
 *     tags: [Subcategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the subcategory to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the subcategory
 *               category_id:
 *                 type: integer
 *                 description: Identifier linking subcategory to its parent category
 *     responses:
 *       '200':
 *         description: Subcategory updated successfully
 *       '404':
 *         description: Subcategory not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/subcategories/subcategories/{id}:
 *   delete:
 *     summary: Delete a subcategory by ID
 *     tags: [Subcategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the subcategory to delete
 *     responses:
 *       '200':
 *         description: Subcategory deleted successfully
 *       '404':
 *         description: Subcategory not found
 *       '500':
 *         description: Internal server error
 */

// Get all subcategories
router.get('/subcategories', subcategoryController.getAllSubcategories);

// Create a new subcategory
router.post('/subcategories', subcategoryController.createSubcategory);

// Update a subcategory by ID
router.put('/subcategories/:id', subcategoryController.updateSubcategory);

// Delete a subcategory by ID
router.delete('/subcategories/:id', subcategoryController.deleteSubcategory);

module.exports = router;
