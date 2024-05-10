// productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../Controller/productController');

router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProductById);
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API endpoints for managing Products
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the product
 *         description:
 *           type: string
 *           description: Description of the product
 *         price:
 *           type: number
 *           description: Price of the product
 *         image_url:
 *           type: string
 *           description: URL or path to the product image
 *         discount:
 *           type: number
 *           description: Discount percentage applicable to the product
 *         discount_price:
 *           type: number
 *           description: Discounted price of the product
 *         category_id:
 *           type: integer
 *           description: Identifier linking product to its category
 *         subcategory_id:
 *           type: integer
 *           description: Identifier linking product to its subcategory
 *         nested_subcategory_id:
 *           type: integer
 *           description: Identifier linking product to its nested subcategory
 */

/**
 * @swagger
 * /api/v1/products/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '201':
 *         description: New product created successfully
 *       '400':
 *         description: Bad request. Invalid input data
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/products/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/products/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product to get
 *     responses:
 *       '200':
 *         description: A product object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/products/products/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '200':
 *         description: Product updated successfully
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/products/products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product to delete
 *     responses:
 *       '200':
 *         description: Product deleted successfully
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/products/products/category/{categoryId}:
 *   get:
 *     summary: Get products by category
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the category to filter products
 *     responses:
 *       '200':
 *         description: A list of products filtered by category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Category not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/products/products/subcategory/{subcategoryId}:
 *   get:
 *     summary: Get products by subcategory
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: subcategoryId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the subcategory to filter products
 *     responses:
 *       '200':
 *         description: A list of products filtered by subcategory
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Subcategory not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/products/products/nested-subcategory/{nestedSubcategoryId}:
 *   get:
 *     summary: Get products by nested subcategory
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: nestedSubcategoryId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the nested subcategory to filter products
 *     responses:
 *       '200':
 *         description: A list of products filtered by nested subcategory
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Nested subcategory not found
 *       '500':
 *         description: Internal server error
 */
