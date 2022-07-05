import express from 'express';
import { getPosts ,createCode,deleteCode} from '../controllers/posts.js';
const router=express.Router();
router.get('/',getPosts);
router.post('/',createCode);
router.delete('/:id',deleteCode);
export default router;