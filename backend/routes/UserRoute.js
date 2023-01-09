import express from 'express';
import {
  deleteTransfer,
  getTransferLocal,
  getTransferLocalById,
  saveTransfer,
  updateTransfer,
} from '../controllers/UserController.js';
const router = express.Router();

router.get('/transferlocal', getTransferLocal);
router.get('/transferlocal/:id', getTransferLocalById);
router.post('/transferlocal', saveTransfer);
router.patch('/transferlocal/:id', updateTransfer);
router.delete('/transferlocal/:id', deleteTransfer);

export default router;
