import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  getAllServices,
  createService,
  updateService,
  deleteService,
} from '../controllers/serviceController.js';

const router = express.Router();

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Routes
router.get('/all', getAllServices);
router.post('/', upload.single('image'), createService);
router.put('/:id', upload.single('image'), updateService);
router.delete('/:id', deleteService);

export default router;
