const express = require('express');
const { Router } = require('express');
const Controller = require('../controllers/controller');



const router = Router();

/**
 * @swagger
 * /login:
 *   get:
 *     description: User required
 *     responses:
 *       200:
 *         description: Returns the requested admin
 */

/**
 * @swagger
 * /login:
 *   post:
 *     description: User is created
 *     responses:
 *       200:
 *         description: Returns the requested admin
 */
/**
 * @swagger
 * /signup:
 *   get:
 *     required: ["email", "password"]
 *     description: User required
 *     responses:
 *       200:
 *         description: User is fetched
 */
/**
 * @swagger
 * /signup:
 *   post:
 *     description: User required
 *     responses:
 *       200:
 *         description: User is fetched
 */
router.get('/signup', Controller.signup_get);
router.post('/signup', Controller.signup_post);
router.get('/login', Controller.login_get);
router.post('/login', Controller.login_post);
router.get('/logout', Controller.logout_get);

module.exports = router;