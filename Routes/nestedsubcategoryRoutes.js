const express = require('express');
const router = express.Router();
const nestedSubcategoryController = require('../Controller/nestedsubcategoryController');
/**
 * @swagger
 * tags:
 *   name: Nested Subcategories
 *   description: API endpoints for managing nested subcategories
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     NestedSubcategory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the nested subcategory
 *         subcategory_id:
 *           type: integer
 *           description: Identifier linking nested subcategory to its parent subcategory
 */
/**
 * @swagger
 * /api/v1/nestedsubcategories/nestedsubcategories:
 *   get:
 *     summary: Get all nested subcategories
 *     tags: [Nested Subcategories]
 *     responses:
 *       '200':
 *         description: A list of nested subcategories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NestedSubcategory'
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/nestedsubcategories/nestedsubcategories:
 *   post:
 *     summary: Create a new nested subcategory
 *     tags: [Nested Subcategories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the nested subcategory
 *               subcategory_id:
 *                 type: integer
 *                 description: Identifier linking nested subcategory to its parent subcategory
 *     responses:
 *       '201':
 *         description: New nested subcategory created successfully
 *       '400':
 *         description: Bad request. Invalid input data
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/nestedsubcategories/nestedsubcategories/{id}:
 *   put:
 *     summary: Update a nested subcategory by ID
 *     tags: [Nested Subcategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the nested subcategory to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the nested subcategory
 *               subcategory_id:
 *                 type: integer
 *                 description: Identifier linking nested subcategory to its parent subcategory
 *     responses:
 *       '200':
 *         description: Nested subcategory updated successfully
 *       '404':
 *         description: Nested subcategory not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/nestedsubcategories/nestedsubcategories/{id}:
 *   delete:
 *     summary: Delete a nested subcategory by ID
 *     tags: [Nested Subcategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the nested subcategory to delete
 *     responses:
 *       '200':
 *         description: Nested subcategory deleted successfully
 *       '404':
 *         description: Nested subcategory not found
 *       '500':
 *         description: Internal server error
 */

// Get all nested subcategories
router.get('/nestedsubcategories', nestedSubcategoryController.getAllNestedSubcategories);

// Create a new nested subcategory
router.post('nestedsubcategories', nestedSubcategoryController.createNestedSubcategory);

// Update a nested subcategory by ID
router.put('/nestedsubcategories/:id', nestedSubcategoryController.updateNestedSubcategory);

// Delete a nested subcategory by ID
router.delete('/nestedsubcategories/:id', nestedSubcategoryController.deleteNestedSubcategory);

module.exports = router;
