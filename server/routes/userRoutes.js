import { Router } from 'express';
import auth from '../middleware/auth.js';
import { register, login, me } from '../controllers/authController.js';
const router = Router();

// CRUD-like endpoints requested by assignment (list/remove all etc.) would normally be admin-only.
// Here we provide the required Authentication endpoints per Part IV.
router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, me);

export default router;
